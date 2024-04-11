import React from "react";
import XimageSvg from "./svgImage/x";
import FacebookImageSvg from "./svgImage/facebook"
import LogoImageSvg from "./svgImage/logo";
export default function Footer() {
  return (
    <footer class="text-gray-400 bg-gray-800 body-font">
      <div class="container px-5 py-8 mx-auto flex items-center  sm:flex-row flex-col ">
      
      <LogoImageSvg/>
   

        <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4 ">
          © 2020 Edwin VG —
          <a
            href="https://github.com/edwinvg99"
            class="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @github.com/edwinvg99
          </a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        
         <FacebookImageSvg/>
         <XimageSvg/>
          <a class="ml-3 text-gray-400">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a class="ml-3 text-gray-400">
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
}
