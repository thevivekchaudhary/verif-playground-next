import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import { FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>

        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-4 lg:grid-rows-1 xl:gap-20">
          {/* 1st column */}
          <div className="space-y-4">
            {/* Logo above description */}
            <div className="mb-0">
              <Logo />
            </div>
            <p className="text-base text-indigo-200/80 mb-6">
              VerifPlayground – One stop solution for all your verification needs!
            </p>
            <div className="flex space-x-3 mt-2">
              <a
                className="flex items-center justify-center text-white-500 transition hover:text-indigo-400"
                href="https://in.linkedin.com/company/andgatetech"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                className="flex items-center justify-center text-white-500 transition hover:text-indigo-400"
                href="mailto:info@andgatetech.com"
                aria-label="Email"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
              <a
                className="flex items-center justify-center text-white-500 transition hover:text-indigo-400"
                href="https://www.andgatetech.com/"
                aria-label="Website"
              >
                <FaGlobe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* 2nd column */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-200">Headquarter</h3>
            <p className="text-base text-indigo-200/80">
              Office- 301, Anjuman VDS, C Block, Sector 63, Noida, Uttar Pradesh 201301
            </p>
          </div>

          {/* 3rd column */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-200">Site Links</h3>
            <ul className="space-y-2 text-base">
              <li>
                <a
                  className="text-indigo-200/80 transition hover:text-indigo-500"
                  href="#0"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/80 transition hover:text-indigo-500"
                  href="#0"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/80 transition hover:text-indigo-500"
                  href="#0"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200/80 transition hover:text-indigo-500"
                  href="#0"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* 4th column */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-gray-200">Contact</h3>
            <p className="text-base text-indigo-200/80">+91 9650882663</p>
            <p className="text-base text-indigo-200/80">info@andgatetech.com</p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 pb-8 flex justify-between text-base text-indigo-200/80">
          <span>Powered by AndGate Informatics</span>
          <span>Made with Love</span>
        </div>
      </div>
    </footer>
  );
}
