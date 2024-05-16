import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import markdownToHtml from "@/lib/markdownToHtml";

export type Author = {
  name: string;
  picture: string;
};

export type PostType = {
  slug: string;
  title: string;
  date: string;
  coverImage: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  preview?: boolean;
};

function DynamicBlog({ blog }: { blog: PostType }) {
  const router = useRouter();
  const [htmlValue, setHtmlValue] = React.useState<string>("");
  async function getMarkDown() {
    const content = await markdownToHtml(blog.content || "");
    setHtmlValue(content);
  }
  console.log(blog);
  React.useEffect(() => {
    getMarkDown();
  }, [blog]);

  return (
    <Layout>
      <div className="pt-8  max-w-3xl w-full blogs">
        <div className="text-[30px] font-[600] text-gray-900 mb-7">
          {blog.title}
        </div>

        <div
          // className={markdownStyles["markdown"]}
          dangerouslySetInnerHTML={{ __html: htmlValue }}
        />
      </div>
    </Layout>
  );
}

export default DynamicBlog;

export const getServerSideProps = async (context: any) => {
  const postsDirectory = join(process.cwd(), "_posts");

  const { slug } = context.params;
  function getPostSlugs() {
    return fs.readdirSync(postsDirectory);
  }

  function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content };
  }

  function getAllPosts() {
    const slugs = getPostSlugs();
    const posts = slugs.map((slug) => getPostBySlug(slug));
    return posts;
  }

  return {
    props: {
      blog: getPostBySlug(slug) as PostType,
    },
  };
};
