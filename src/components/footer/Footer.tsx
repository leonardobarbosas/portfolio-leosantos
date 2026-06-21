export default function Footer() {
  return (
    <footer className="footer border-t-2 w-full h-20 items-center border-[#333333] flex justify-between px-10">
      <ul className="flex gap-10">
        <li>
          <a
            href="https://github.com/leonardobarbosas"
            target="_blank"
            className="text-[#FFFFFF50]"
          >
            Github
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/leobarbosas/"
            target="_blank"
            className="text-[#FFFFFF50]"
          >
            Linkedin
          </a>
        </li>
        <li>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqbQHFxgGLkrHMvWPTCDDNcKFSxzwXCMVhBThRwMXQFrbxXcTwFmtBgQbBljBsXvCHxJQB"
            target="_blank"
            className="text-[#FFFFFF50]"
          >
            leonardobarbosantos@gmail.com
          </a>
        </li>
      </ul>
      <p className="text-[#FFFFFF80]">© 2026 Leonardo Barbosa Santos.</p>
    </footer>
  );
}
