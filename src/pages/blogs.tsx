import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import React from "react";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";
import markdownToHtml from "@/lib/markdownToHtml";
import { format } from "date-fns";

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

function Blog({ blog }: { blog: PostType[] }) {
  const router = useRouter();
  return (
    <Layout>
      <div className="pt-8  max-w-3xl w-full md:!w-[1100px]">
        <div className="flex flex-col gap-2  justify-start w-full items-start">
          {blog.map((post) => (
            <div
              className="flex w-fit gap-2 flex-col cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-transform duration-200 transform "
              onClick={() => {
                router.push(`/blogs/${post.slug}`);
              }}
              key={post.slug}
            >
              <div className="text-gray-600 text-xs flex flex-col md:flex-row gap-2 items-start  md:items-center">
                <div className="!w-fit">{format(post.date, "dd-MM-yyyy")}</div>
                <div className="text-gray-900 text-xl font-[600]">
                  {post.title}
                </div>
              </div>
              <div className="text-gray-400 text-xs">{post.excerpt}</div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Blog;

export const getStaticProps = async () => {
  const postsDirectory = join(process.cwd(), "_posts");

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
      blog: getAllPosts(),
    },
    revalidate: 60, // Regenerate the page every 60 seconds
  };
};

// export const getServerSideProps = async (context: any) => {
//   const postsDirectory = join(process.cwd(), "_posts");

//   function getPostSlugs() {
//     return fs.readdirSync(postsDirectory);
//   }

//   function getPostBySlug(slug: string) {
//     const realSlug = slug.replace(/\.md$/, "");
//     const fullPath = join(postsDirectory, `${realSlug}.md`);
//     const fileContents = fs.readFileSync(fullPath, "utf8");
//     const { data, content } = matter(fileContents);

//     return { ...data, slug: realSlug, content };
//   }

//   function getAllPosts() {
//     const slugs = getPostSlugs();
//     const posts = slugs.map((slug) => getPostBySlug(slug));
//     return posts;
//   }

//   return {
//     props: {
//       blog: getAllPosts(),
//     },
//   };
// };
