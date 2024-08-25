import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import markdownToHtml from "@/lib/markdownToHtml";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";

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
  React.useEffect(() => {
    getMarkDown();
  }, [blog]);

  return (
    <Layout>
      <div className="pt-8 max-w-3xl w-full blogs">
        <div className="pb-3" onClick={() => router.push("/blogs")}>
          <motion.div
            className="flex gap-1 items-center cursor-pointer"
            onClick={() => router.push("/blogs")}
            whileHover={{
              x: -3,
              transition: {
                type: "spring",
                stiffness: 300,
                damping: 10,
              },
            }}
          >
            <ChevronLeftIcon />
            Go Back
          </motion.div>
        </div>
        <div className="text-[30px] font-[600] text-gray-900 mb-7">
          {blog.title}
        </div>

        <div dangerouslySetInnerHTML={{ __html: htmlValue }} />
      </div>
    </Layout>
  );
}

export default DynamicBlog;

export async function getStaticProps(context: any) {
  const postsDirectory = path.join(process.cwd(), "_posts");
  const { slug } = context.params;

  function getPostBySlug(slug: string) {
    const realSlug = slug.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return { ...data, slug: realSlug, content };
  }

  const blog = getPostBySlug(slug);

  return {
    props: {
      blog,
    },
  };
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "_posts");
  const slugs = fs
    .readdirSync(postsDirectory)
    .map((slug) => slug.replace(/\.md$/, ""));
  const paths = slugs.map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
