import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import markdownToHtml from "@/lib/markdownToHtml";

function DynamicBlog({ post }) {
  console.log(post);
  const router = useRouter();
  const [htmlValue, setHtmlValue] = React.useState<string>("");
  async function getMarkDown() {
    const content = await markdownToHtml(post.content || "");
    console.log(content);
    setHtmlValue(content);
  }

  React.useEffect(() => {
    getMarkDown();
  }, [post]);

  console.log(htmlValue);
  return (
    <Layout>
      <div className="pt-8  max-w-3xl w-full">
        <div>{router.query.slug}</div>
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

  console.log(getPostBySlug(slug));

  return {
    props: {
      post: getPostBySlug(slug),
    },
  };
};
