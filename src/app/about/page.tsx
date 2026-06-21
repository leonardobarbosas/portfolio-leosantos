"use client";

export default function About() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv-leonardo.pdf";
    link.download = "Leonardo_Santos_CV.pdf";
    link.click();
  };

  return (
    <div className="flex flex-col h-full pt-5">
      <h1 className="pl-10 text-6xl font-bold bg-[#252525] border-t-2 border-b-2 pt-5 pb-5 border-[#333333]">
        Sobre Mim
      </h1>

      <div className="h-full flex w-full">
        <div className="flex flex-col w-1/2 gap-10 pl-20 justify-center">
          <div className="flex flex-col gap-5 w-2/3">
            <p>Quem eu sou</p>
            <p>
              Sou <span className="font-bold">Leonardo Santos</span>,
              desenvolvedor Fullstack apaixonado por transformar ideias em
              aplicações completas, do backend ao frontend.
            </p>
            <p>
              Curso Análise e Desenvolvimento de Sistemas na{" "}
              <span className="font-bold">FIAP</span>, onde venho aprofundando
              conhecimentos em arquitetura de sistemas, boas práticas de
              desenvolvimento e construção de APIs robustas.
            </p>
            <p>
              No dia a dia, busco escrever código limpo, escalável e orientado a
              resultados, sempre explorando novas ferramentas e boas práticas de
              mercado.
            </p>
          </div>
          <ul className="flex gap-2 items-center">
            <li className="border-[#007CED] border-2 bg-[#333333] p-1 pl-3 pr-3 rounded-4xl">
              Fullstack
            </li>
            <li className="border-[#007CED] border-2 bg-[#333333] p-1 pl-3 pr-3 rounded-4xl">
              Next.js
            </li>
            <li className="border-[#007CED] border-2 bg-[#333333] p-1 pl-3 pr-3 rounded-4xl">
              Spring Boot
            </li>
            <li className="border-[#007CED] border-2 bg-[#333333] p-1 pl-3 pr-3 rounded-4xl">
              FIAP
            </li>
          </ul>
          <button
            onClick={handleDownload}
            className="border-[#D5D5D5] border-2 bg-[#333333] w-35 h-13 rounded-4xl"
          >
            Baixar CV
          </button>
        </div>

        <div className="flex flex-col justify-center w-1/2 pr-20"></div>
      </div>
    </div>
  );
}
