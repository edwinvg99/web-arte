import React from "react";
import XimageSvg from "./svgImage/x";
import FacebookImageSvg from "./svgImage/facebook"
import LogoImageSvg from "./svgImage/logo";
import InstagramImageSvg from "./svgImage/instagram";
import LinkedinImageSvg from "./svgImage/linkedin";
export default function Footer() {
  return (
    <footer className="text-gray-400 bg-gray-800 body-font flex flex-row">
      <div className="container px-5 py-8 mx-auto flex items-center justify-center  max-md:flex-col max-sm:flex-col flex-row  ">

        <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 ml-10 ">
          © 2020 Edwin VG —
          <a
            href="https://github.com/edwinvg99"
            className="text-gray-500 ml-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            @github.com/edwinvg99
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
        <FacebookImageSvg/>
        <XimageSvg/>
        <InstagramImageSvg/>
        <LinkedinImageSvg/>
       
        </span>
      </div>
    </footer>
  );
}
