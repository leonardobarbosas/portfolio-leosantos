"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv-leonardo.pdf";
    link.download = "Leonardo_Santos_CV.pdf";
    link.click();
  };

  return (
    <div className="h-full flex justify-center items-center gap-10">
      <Image
        src="/img/main-image.png"
        alt="Image-Main"
        height={600}
        width={600}
        className="transition-transform duration-1000 hover:rotate-50"
      />
      <div className="w-1/3 flex flex-col gap-7 justify-center">
        <h2 className="text-[#FFFFFF50] text-2xl">Desenvolvedor Fullstack</h2>
        <h1 className="text-6xl font-bold">Leonardo Santos</h1>
        <div>
          <p>
            Desenvolvedor Fullstack focado na criação de aplicações completas,
            do backend ao frontend.
          </p>
          <p>
            Tenho experiência com React, Next.js, Node.js e análise de dados com
            SQL e Power BI, construindo soluções eficientes, escaláveis e
            orientadas a resultados.
          </p>
        </div>
        <div className="flex gap-5">
          <Link href="/projetos">
            <button className="border-[#007CED] border-2 bg-[#333333] w-35 h-13 rounded-4xl hover:bg-[#007CED] transition-all duration-300">
              Projetos
            </button>
          </Link>
          <button
            onClick={handleDownload}
            className="border-[#D5D5D5] border-2 bg-[#333333] w-35 h-13 rounded-4xl hover:bg-[#D5D5D5] hover:text-black transition-all duration-300"
          >
            Baixar CV
          </button>
        </div>
      </div>
    </div>
  );
}
