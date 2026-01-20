"use client"
import Link from "next/link";
import React, { useState } from "react";
import Script from "next/script";
import { FaGithub, FaLinkedin } from "react-icons/fa";
const EmailSection = () => {
  const [emailSubmitted, setEmailsubmitted] = useState(false);
  const handleSubmit = async(e)=> {
    e.preventDefault();
    const form = e.currentTarget;

    const formData = new FormData(form);
    const company = formData.get("company");

    if (!window.grecaptcha) {
      alert("reCAPTCHA not loaded yet. Please try again in a second.");
      return;
    }

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      alert("Missing reCAPTCHA site key env var.");
      return;
    }

    const token = await window.grecaptcha.execute(siteKey, { action: "contact" });

    const data = {
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      company,                 
      recaptchaToken: token, 
    };

    const response = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  
    const resData = await response.json();
  
    // ✅ 성공 체크는 response.ok로 하는 게 안전
    if (response.ok) {
      setEmailsubmitted(true);
      form.reset();
    } else {
      console.log(resData);
      alert("Failed to send. Please try again.");
    }
  }
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4" id="contact">
      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />
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
                name="email"
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
                name="subject"
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
              <textarea id="message"
                        name="message"
                        required
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
            {/* honey pot */}
            <input
              name="company"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />
          </form>
        </div>
    </section>
  );
};

export default EmailSection;
