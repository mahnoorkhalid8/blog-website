import React from "react";
import { IoIosMail } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="container pt-36 p-16 font-serif text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        <div className="space-y-6">
          <h1 className="inline-block p-4 shadow-2xl border-gray-400 text-2xl md:text-4xl">
            Contact Us
          </h1>

          <div className="pt-6">
            <p className="text-lg md:text-xl p-4 shadow-2xl border-gray-400">
            We&apos;d love to hear from you! Whether you have questions about makeup products, 
            need beauty tips, or want to collaborate, feel free to reach out. Drop us a message, 
            and we&apos;ll get back to you as soon as possible. Stay glam and stay connected!
            </p>
          </div>

          <div className="text-base md:text-lg py-4 px-1 md:px-4 space-y-3 inline-block border-gray-400 shadow-2xl">
            <div className="flex gap-5 items-center">
              <IoIosMail size={30} />
              <a href="mailto:mahnoorkhalid814@gmail.com">
                mahnoorkhalid814@gmail.com
              </a>
            </div>
            <div className="flex gap-5 items-center">
              <FiPhoneCall size={25} />
              <a href="tel:+92 333 2455342">+92 333 2455342</a>
            </div>
            <div className="flex gap-5 items-center">
              <BsWhatsapp size={25} />
              <a href="tel:+92 333 2455342">+92 333 2455342</a>
            </div>
          </div>
        </div>

        <div className="space-y-6 space-x-6">
          <form className="space-y-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-semibold text-2xl"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                className="shadow-2xl border-black border-2 bg-gray-100 text-black h-16"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-semibold text-2xl"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="shadow-2xl border-black border-2 bg-gray-100 text-black h-16"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-semibold text-2xl"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={7}
                placeholder="Enter your message"
                className="shadow-2xl border-black border-2 bg-gray-100 text-black h-auto"
              ></textarea>
            </div>

            <button type="submit" className="bg-white text-black hover:bg-gray-400 rounded-md p-2 m-4">
            Send
          </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;