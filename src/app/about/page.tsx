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
        <div className="h-full flex w-1/2">
          <div className="flex flex-col  gap-10 pl-20 justify-center">
            <div className="flex flex-col gap-5">
              <p className="text-[#cecece]">Quem eu sou</p>
              <p className="text-[#cecece]">
                Sou{" "}
                <span className="font-bold text-white">Leonardo Santos</span>,
                desenvolvedor Fullstack apaixonado por transformar ideias em
                aplicações completas, do backend ao frontend.
              </p>
              <p className="text-[#cecece]">
                Curso Análise e Desenvolvimento de Sistemas na{" "}
                <span className="font-bold text-white">FIAP</span>, onde venho
                aprofundando conhecimentos em arquitetura de sistemas, boas
                práticas de desenvolvimento e construção de APIs robustas.
              </p>
              <p className="text-[#cecece]">
                No dia a dia, busco escrever código limpo, escalável e orientado
                a resultados, sempre explorando novas ferramentas e boas
                práticas de mercado.
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
              className="border-[#D5D5D5] border-2 bg-[#333333] w-35 h-13 rounded-4xl hover:bg-[#D5D5D5] hover:text-black transition-all duration-300"
            >
              Baixar CV
            </button>
          </div>

          <div className="flex flex-col justify-center w-1/2 pr-20"></div>
        </div>

        <div className="w-1/2  flex flex-col justify-center gap-10">
          <h2 className="text-[#cecece] text-2xl font-semibold">
            Stack de tecnologias
          </h2>
          <ul className="flex flex-wrap gap-5 items-center border-l-2 border-[#007CED] rounded-lg pl-3 text-center">
            <h3 className="pr-15 font-semibold text-2xl">Linguagens</h3>
            <li className="text-[#cecece]">Java</li>•
            <li className="text-[#cecece]">Kotlin</li>•
            <li className="text-[#cecece]">TypeScript</li>•
            <li className="text-[#cecece]">JavaScript</li>•
            <li className="text-[#cecece]">Python</li>•
            <li className="text-[#cecece]">C#</li>
          </ul>
          <ul className="flex flex-wrap gap-5 items-center border-l-2 border-[#007CED] rounded-lg pl-3 text-center">
            <h3 className="pr-15 font-semibold text-2xl">Front-end</h3>
            <li className="text-[#cecece]">React</li>•
            <li className="text-[#cecece]">Next.js</li>•
            <li className="text-[#cecece]">React Native</li>•
            <li className="text-[#cecece]">Jetpack Compose</li>
          </ul>
          <ul className="flex flex-wrap gap-5 items-center border-l-2 border-[#007CED] rounded-lg pl-3 text-center">
            <h3 className="pr-15 font-semibold text-2xl">Back-end</h3>
            <li className="text-[#cecece]">Node.js</li>•
            <li className="text-[#cecece]">.NET</li>•
            <li className="text-[#cecece]">Spring Boot</li>
          </ul>
          <ul className="flex flex-wrap gap-5 items-center border-l-2 border-[#007CED] rounded-lg pl-3 text-center">
            <h3 className="pr-15 font-semibold text-2xl">Banco de dados</h3>
            <li className="text-[#cecece]">MySql</li>•
            <li className="text-[#cecece]">Postgres</li>•
            <li className="text-[#cecece]">Oracle</li>
          </ul>
          <ul className="flex flex-wrap gap-5 items-center border-l-2 border-[#007CED] rounded-lg pl-3 text-center">
            <h3 className="pr-15 font-semibold text-2xl">Tecnologias</h3>
            <li className="text-[#cecece]">PowerBI</li>•
            <li className="text-[#cecece]">IntelliJ</li>•
            <li className="text-[#cecece]">Vs Code</li>•
            <li className="text-[#cecece]">Git</li>•
            <li className="text-[#cecece]">Github</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
