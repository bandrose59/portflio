import {
  FaWhatsapp,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaMedium,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

import { SiCodeforces, SiLeetcode } from "react-icons/si";

export const GetInTouch = () => {
  return (
    <section className=" bg-dark dark:bg-gray-900" id="contact">
      <div className="py-12 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center">
          <h2 className="mb-8 text-3xl sm:text-4xl tracking-tight font-extrabold text-gray-100 dark:text-white">
            Get In Touch
          </h2>
          <p className="mb-8 font-light text-gray-200 dark:text-gray-400 text-sm sm:text-base md:text-lg">
            I'm always open to discussing new opportunities, collaborations, or
            just a friendly chat. Feel free to reach out!
          </p>

          {/* Social Buttons */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href="https://wa.me/919699715813"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg text-xs sm:text-sm px-4 sm:px-5 py-2.5 w-full sm:w-auto justify-center max-w-[220px]"
            >
              <FaWhatsapp className="text-lg sm:text-xl" /> WhatsApp
            </a>

            <a
              href="https://www.linkedin.com/in/riteshyevatkar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg text-xs sm:text-sm px-4 sm:px-5 py-2.5 w-full sm:w-auto justify-center max-w-[220px]"
            >
              <FaLinkedin className="text-lg sm:text-xl" /> LinkedIn
            </a>

            <a
              href="mailto:2023bit027@sggs.ac.in"
              className="flex items-center gap-2 bg-red-500 hover:bg-red-700 text-white font-medium rounded-lg text-xs sm:text-sm px-4 sm:px-5 py-2.5 w-full sm:w-auto justify-center max-w-[220px]"
            >
              <FaEnvelope className="text-lg sm:text-xl" /> E-mail
            </a>
          </div>

          {/* Footer with Logos */}
          <div className="mt-10 text-gray-300 dark:text-gray-400 flex flex-wrap justify-center items-center gap-3 sm:gap-4 text-sm sm:text-base">
            <span className="w-full sm:w-auto text-center text-lg sm:text-xl font-bold mb-2 sm:mb-0">
              Find me on
            </span>

            {/* Icon Buttons */}
            {[
              {
                href: "https://twitter.com/",
                bg: "bg-gray-800 hover:bg-gray-900",
                icon: <FaTwitter />,
              },
              {
                href: "https://medium.com/",
                bg: "bg-gray-800 hover:bg-gray-900",
                icon: (
                  <FaMedium className="bg-white bg-blend-color text-black" />
                ),
              },
              {
                href: "https://github.com/yourusername",
                bg: "bg-gray-800 hover:bg-gray-900",
                icon: <FaGithub />,
              },
              {
                href: "https://codeforces.com/profile/yourhandle",
                bg: "bg-blue-600 hover:bg-blue-700",
                icon: <SiCodeforces />,
              },
              {
                href: "#leetcode",
                bg: "bg-pink-500 hover:bg-pink-600",
                icon: <SiLeetcode />,
              },
              {
                href: "https://instagram.com/yourusername",
                bg: "bg-pink-500 hover:bg-pink-600",
                icon: <FaInstagram />,
              },
            ].map(({ href, bg, icon }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${bg} flex items-center justify-center rounded-full text-white font-medium border border-neutral-200 dark:bg-slate-900 dark:border-slate-800
                  text-xl sm:text-2xl md:text-3xl
                  w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16
                  transition-colors`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
