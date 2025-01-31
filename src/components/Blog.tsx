import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaRegComment } from "react-icons/fa6";
import Link from "next/link";
import { ulForr } from "@/sanity/lib/image";
import type { Blog } from "@/app/type";

const Blog = ({ data }: { data: Blog }) => {
  return (
    <div id="blog" className="body-font font-serif text-white h-full w-full flex flex-col items-center text-center border-gray-400 shadow-2xl transition-transform transform hover:scale-105"> 
      <img
        alt="{data.title}"
        className=" rounded-lg w-56 h-56 object-cover object-center mb-4"
        src={ulForr(data.image).url()}
      />
      <div>
        <h2 className="title-font font-semibold text-lg text-white">
          {data.title}
        </h2>
        <p className="mb-4 text-sm">{data.paragraph}</p>
        <Link href={`/blog/${data.slug}`}>
          <button className="bg-white text-black hover:bg-gray-400 rounded-md p-2 m-4">
            View More...
          </button>
        </Link>
        <br />
        <span className="inline-flex gap-2">
          <Link href="#" className="text-gray-300">
            <FaFacebookF />
          </Link>
          <Link href="#" className="text-gray-300">
            <FiTwitter />
          </Link>
          <Link href="#" className="text-gray-300">
            <FaRegComment />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Blog;
