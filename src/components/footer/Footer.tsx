import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer border-t-2 w-full h-20 items-center border-[#333333] hover:border-[#6b6b6b] duration-500 transition-all flex justify-between px-10">
      <ul className="flex gap-10">
        <li>
          <Link
            href="https://github.com/leonardobarbosas"
            target="_blank"
            className="text-[#FFFFFF50] hover:text-white transition-all duration-300"
          >
            Github
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/leobarbosas/"
            target="_blank"
            className="text-[#FFFFFF50] hover:text-white transition-all duration-300"
          >
            Linkedin
          </Link>
        </li>
        <li>
          <Link
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbQHFxgGLkrHMvWPTCDDNcKFSxzwXCMVhBThRwMXQFrbxXcTwFmtBgQbBljBsXvCHxJQB"
            target="_blank"
            className="text-[#FFFFFF50] hover:text-white transition-all duration-300"
          >
            leonardobarbosantos@gmail.com
          </Link>
        </li>
      </ul>
      <p className="text-[#FFFFFF80]">© 2026 Leonardo Barbosa Santos.</p>
    </footer>
  );
}
