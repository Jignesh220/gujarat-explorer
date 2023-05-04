import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../images/Logo/logo.png";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="mt-60" style={{
      backgroundColor: '#011D3E'
    }}>
      <div className="mx-auto max-w-5xl px-4 pt-16 pb-5 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {/* <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 340.64 441.88"
            className="w-8"
          >
            <defs>
              <linearGradient
                id="linear-gradient"
                x1="221.12"
                y1="393.13"
                x2="221.12"
                y2="224.01"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#004b4d" />
                <stop offset="1" stopColor="#00878a" />
              </linearGradient>
              <linearGradient
                id="linear-gradient-2"
                x1="170.26"
                y1="341.5"
                x2="170.26"
                y2="84.19"
                gradientTransform="translate(164.07 -73.09) rotate(45)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#ffa627" />
                <stop offset=".06" stopColor="#ffab26" />
                <stop offset=".44" stopColor="#ffc826" />
                <stop offset=".76" stopColor="#ffd926" />
                <stop offset="1" stopColor="#ffe026" />
              </linearGradient>
              <linearGradient
                id="linear-gradient-3"
                x1="135.6"
                y1="477.62"
                x2="135.6"
                y2="299.07"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#006568" />
                <stop offset="1" stopColor="#00878a" />
              </linearGradient>
            </defs>
            <path
              d="M340.63,169.27C340.04,73.51,260.55-3.29,164.18,.11,76.74,3.2,4.87,73.68,.24,161.05c-2.44,46.16,13.52,88.49,41.12,120.47h0l99.09,143.91c15.22,22.1,47.93,21.9,62.87-.39l97.31-145.12h0c25.16-29.89,40.26-68.52,40-110.65Z"
              style={{ fill: "#29abe2" }}
            />
            <path
              d="M152.41,391.16l57.03,24.77,91.2-136.02c4.8-5.7,9.23-11.72,13.26-18.02l-3.94-3.07c-6.1-4.76-14.86-3.93-19.96,1.89l-28.46,32.46-15.62-12.01c-6.41-4.93-15.44-4.56-21.42,.89l-32.2,29.31-13.92-11.52c-4.74-3.92-11.53-4.1-16.47-.44l-33.56,24.87,24.06,66.89Z"
              style={{ fill: "url(#linear-gradient)" }}
            />
            <circle
              cx="170.26"
              cy="161.51"
              r="105.15"
              transform="translate(-64.34 167.7) rotate(-45)"
              style={{ fill: "url(#linear-gradient-2)" }}
            />
            <path
              d="M182.41,338.44l-21.15,12.21-25.05-43.38c-3.55-6.15-10.94-8.95-17.67-6.69l-20.75,6.96-23.81-41.25c-4.61-7.99-15.34-9.83-22.36-3.85l-15.25,13.01c1.62,2.06,3.29,4.08,5,6.07l99.09,143.91c15.22,22.1,47.93,21.9,62.87-.39l31.51-46.99-29.26-35.43c-5.67-6.86-15.46-8.63-23.17-4.18Z"
              style={{ fill: "url(#linear-gradient-3)" }}
            />
            <path
              d="M112.8,148.77c.04-.53,.08-1.05,.08-1.59,0-10.64-8.62-19.26-19.26-19.26-3.94,0-7.59,1.19-10.64,3.21-4.06-7.24-11.8-12.13-20.69-12.13-11.16,0-20.5,7.72-23.02,18.1-2.02-.97-4.28-1.54-6.68-1.54-7.76,0-14.17,5.74-15.25,13.2H112.8Z"
              style={{ fill: "#fff" }}
            />
            <circle cx="282.49" cy="92.74" r="3.94" style={{ fill: "#fff" }} />
            <path
              d="M36.37,179.48c0-2.17-1.76-3.94-3.94-3.94s-3.94,1.76-3.94,3.94,1.76,3.94,3.94,3.94,3.94-1.76,3.94-3.94Z"
              style={{ fill: "#fff" }}
            />
            <path
              d="M116.52,284.96c0-2.18-1.77-3.94-3.94-3.94s-3.94,1.77-3.94,3.94,1.77,3.94,3.94,3.94,3.94-1.77,3.94-3.94Z"
              style={{ fill: "#fff" }}
            />
            <path
              d="M171.03,380.6c0-2.18-1.77-3.94-3.94-3.94s-3.94,1.77-3.94,3.94,1.77,3.94,3.94,3.94,3.94-1.77,3.94-3.94Z"
              style={{ fill: "#fff" }}
            />
            <circle cx="313.89" cy="164.57" r="5.87" style={{ fill: "#fff" }} />
            <circle cx="96.17" cy="50.49" r="5.87" style={{ fill: "#fff" }} />
            <circle cx="238.49" cy="317.23" r="5.87" style={{ fill: "#fff" }} />
            <path
              d="M209.43,233.78c-.04-.53-.08-1.05-.08-1.59,0-10.63,8.62-19.26,19.26-19.26,3.94,0,7.59,1.19,10.64,3.21,4.06-7.24,11.8-12.13,20.69-12.13,11.16,0,20.5,7.72,23.02,18.1,2.02-.97,4.28-1.54,6.68-1.54,7.76,0,14.17,5.74,15.25,13.2h-95.46Z"
              style={{ fill: "#fff" }}
            />
            <image
              width="500"
              height="500"
              transform="translate(90.76 63.64) scale(.23)"
            />
            <image
              width="500"
              height="500"
              transform="translate(72.06 50.45) scale(.42)"
            />
            <path
              d="M218.5,148.31c-.04-.53-.08-1.05-.08-1.59,0-10.63,8.62-19.26,19.26-19.26,3.94,0,7.59,1.19,10.64,3.21,4.06-7.24,11.8-12.13,20.69-12.13,11.16,0,20.5,7.72,23.02,18.1,2.02-.97,4.28-1.54,6.68-1.54,7.76,0,14.17,5.74,15.25,13.2h-95.46Z"
              style={{ fill: "#fff" }}
            />
            <path
              d="M128.34,91.13c-.04-.53-.08-1.05-.08-1.59,0-10.63,8.62-19.26,19.26-19.26,3.94,0,7.59,1.19,10.64,3.21,4.06-7.24,11.8-12.13,20.69-12.13,11.16,0,20.5,7.72,23.02,18.1,2.02-.97,4.28-1.54,6.68-1.54,7.76,0,14.17,5.74,15.25,13.2h-95.46Z"
              style={{ fill: "#fff" }}
            />
            <path
              d="M112.04,173.43s-42.8,23.34-53.95,17.76c-11.15-5.58,10.05-17.25,10.05-17.25,0,0-32.06,13.37-19.39,25.34,14.28,13.5,63.29-25.85,63.29-25.85Z"
              style={{ fill: "#00365f" }}
            />
            <path
              d="M54.67,284.65c-.04-.53-.08-1.05-.08-1.59,0-10.63,8.62-19.26,19.26-19.26,3.94,0,7.59,1.19,10.64,3.21,4.06-7.24,11.8-12.13,20.69-12.13,11.16,0,20.5,7.72,23.02,18.1,2.02-.97,4.28-1.54,6.68-1.54,7.76,0,14.17,5.74,15.25,13.2H54.67Z"
              style={{ fill: "#fff" }}
            />
            <g>
              <path
                d="M160.25,147.49l.71-1.82c.59-1.51-.36-3.19-1.96-3.46l-1.93-.32c-1.76-.3-3.56-.02-5.15,.8l-10.43,5.36c-12.12,6.22-23.21,14.28-32.87,23.89h0c-.74,.74-.04,1.99,.98,1.73h0c13.2-3.36,25.81-8.74,37.37-15.95l9.95-6.21c1.51-.94,2.68-2.35,3.33-4.01Z"
                style={{ fill: "#00365f" }}
              />
              <g>
                <path
                  d="M145.93,148.45l-30.65-9.73c-2.3-.73-4.06,2.09-2.39,3.84l15.29,15.96,17.74-10.07Z"
                  style={{ fill: "#00365f" }}
                />
                <path
                  d="M148.9,153.69l-7.37,31.3c-.55,2.35-3.88,2.41-4.52,.08l-5.85-21.31,17.74-10.07Z"
                  style={{ fill: "#00365f" }}
                />
              </g>
              <g>
                <path
                  d="M116.12,167.57l-11.16-3.54c-.84-.27-1.48,.76-.87,1.4l5.57,5.81,6.46-3.66Z"
                  style={{ fill: "#00365f" }}
                />
                <path
                  d="M117.2,169.47l-2.68,11.39c-.2,.86-1.41,.88-1.65,.03l-2.13-7.76,6.46-3.66Z"
                  style={{ fill: "#00365f" }}
                />
              </g>
            </g>
          </svg> */}
          <div className="flex flex-col gap-4">
            <center>
              <Image src={Logo} width={45} alt="Main_Logo" />
            </center>

            <div className="font-outfit font-bold my-auto text-xl tracking-wide text-blue-300">
              Gujarat Explorer
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 text-center leading-relaxed font-outfit tracking-wider text-lg text-white">
          Experience the vibrant festivals, traditional handicrafts, and
          intricate architecture of Gujarat, while indulging in its diverse and
          flavorful cuisine, all set against the backdrop of its scenic beaches
          and arid landscapes.
        </p>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
          <li>
            <Link
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-blue-300 transition hover:text-blue-300/75"
            >
              <span className="sr-only">Facebook</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-pink-700 transition hover:text-pink-700/75"
            >
              <span className="sr-only">Instagram</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-blue-400 transition hover:text-blue-400/75"
            >
              <span className="sr-only">Twitter</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
          </li>

          <li>
            <Link
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:text-white/75"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </li>
        </ul>
        <nav aria-label="Footer Nav" className="mt-12">
          <ul className="flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
              <Link
                className="text-white font-outfit tracking-wide transition hover:text-white/75"
                href="/#ByCities"
              >
                Category
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-outfit tracking-wide transition hover:text-white/75"
                href="/gallery"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-outfit tracking-wide transition hover:text-white/75"
                href="/about-us"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                className="text-white font-outfit tracking-wide transition hover:text-white/75"
                href="/contact-us"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Footer Nav copyright" className="min-w-full text-center">
          <div className="text-white text-base mt-12 font-outfit tracking-wide">
            Copyright &copy;2023{" "}
            <span className="text-blue-300">
              {"  "}
              <Link href="/">Gujarat Explorer</Link>
            </span>
          </div>
        </nav>
      </div>
    </footer>
  );
}
