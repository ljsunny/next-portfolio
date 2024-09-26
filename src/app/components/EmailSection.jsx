"use client"
import Link from "next/link";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const EmailSection = () => {
  const [emailSubmitted, setEmailsubmitted] = useState(false);
  const handleSubmit = async(e)=> {
    e.preventDefault();
    const data = {
      email:e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send"

      const options = {
          method: 'POST',
          headers:{
            'Content-Type':'application/json',
          },
          body:JSONdata
      }

      const response = await fetch(endpoint, options);
      console.log(response);
      const resData = await response.json();

      if(resData.status === 200) {
        console.log('Message sent');
        setEmailsubmitted(true);
      }
  }
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4" id="contact">
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>

        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/ljsunny">
            <FaGithub size="30" color="#ffffff" />
          </Link>
          <Link href="https://www.linkedin.com/in/jisun-lee-bba451307/">
            <FaLinkedin size="30" color="#ffffff" />
          </Link>
        </div>
      </div>
      <div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                type="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="test@gmail.com"
              ></input>
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                type="subject"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your subject
              </label>
              <input
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just Say Hi!"
              ></input>
            </div>
            <div className="mb-6">
              <label htmlFor="message"
                    className="text-white block mb-2 text-sm font-medium">
                Message
              </label>
              <textarea name="message"
                        id="message"
                        className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                        placeholder="Let's talk about..."/>
            </div>
            <button type="submit"
                    className="bg-sky-600 hover:bg-sky-900 text-white font-medium py-2.5 rounded-lg w-full">Send Message</button>
                    {
                      emailSubmitted &&(
                        <p className="text-green-500 text-sm mt-2">Email sent successfully</p>
                      )
                    }
          </form>
        </div>
    </section>
  );
};

export default EmailSection;
