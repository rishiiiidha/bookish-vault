import React from "react";
import { FolderGit2 } from "lucide-react";
const Footer = () => {
  return (
    <footer class="bg-zinc-50 text-center dark:bg-neutral-700 lg:text-left">
      <div class="bg-black/5 p-4 text-center text-surface dark:text-white">
        © 2024 Copyright
        <a
          href="https://github.com/rishiiiidha/bookish-vault"
          className="flex justify-center items-center"
        >
          <FolderGit2 />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
