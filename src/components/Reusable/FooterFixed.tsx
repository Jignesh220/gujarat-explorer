import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../images/Logo/logo.png";

export default function FooterFixed() {
  return (
    <footer
      aria-label="Site Footer"
      className="bg-transparent min-w-full fixed bottom-0"
      style={{
        backdropFilter: "blur(5px)",
      }}
    >
      <nav aria-label="Footer Nav" className="min-w-full text-center">
        <div className="text-white text-base mb-2 font-outfit tracking-wide">
          Copyright &copy;2023{" "}
          <span className="text-blue-300">
            {" "}
            <Link href="/">Gujarat Explorer</Link>
          </span>
        </div>
      </nav>
    </footer>
  );
}
