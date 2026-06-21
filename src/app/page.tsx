import Image from "next/image";
import ImageMain from "@/public/img/main-image.png";

export default function Home() {
  return (
    <div className="home-div flex">
      <Image src={ImageMain} alt="Image-Main" height={500} />
      <div className="w-1/3">
        <h2>Desenvolvedor Fullstack</h2>
        <h1>Leonardo Santos</h1>
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
          <button>Projetos</button>
          <button>Baixar CV</button>
        </div>
      </div>
    </div>
  );
}
