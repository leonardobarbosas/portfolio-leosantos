"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const projetos = [
  {
    id: "1",
    titulo: "ConectCar",
    descricao: "O seu conectador de veículo mais seguro!",
    imagem: "/img/connectcar.png",
    link: "https://conectcar.com.br",
  },
  {
    id: "2",
    titulo: "Vini Arquitetos",
    descricao:
      "Projeto desenvolvido para o escritório de arquitetura Vini Arquitetos, com foco em design moderno e funcionalidade.",
    imagem: "/img/vini.png",
    link: "https://viniarquitetos.com.br",
  },
  {
    id: "3",
    titulo: "Vanbora",
    descricao: "Solução para seu transporte escolar!",
    imagem: "/img/vanbora.png",
    link: "https://vanbora.com.br",
  },
  {
    id: "4",
    titulo: "Lf Energy",
    descricao:
      "Projetada para conectar pessoas e empresas às melhores soluções de energia renovável",
    imagem: "/img/lfenergy.png",
    link: "https://lfenergy.com.br",
  },
  {
    id: "5",
    titulo: "NovaOnda",
    descricao:
      "Projeto inovador para surfistas e amantes do mar, conectando pessoas e experiências.",
    imagem: "/img/novaonda.png",
    link: "https://novaonda.com.br",
  },
  {
    id: "6",
    titulo: "Afetto",
    descricao:
      "Conecte seu pet com o mundo! Plataforma inovadora para cuidados e bem-estar animal.",
    imagem: "/img/afetto.png",
    link: "https://affetto.com.br",
  },
  {
    id: "7",
    titulo: "Api Agrovista",
    descricao: "Api em Java focada na solução agrovista!",
    imagem: "/img/java-dev.png",
    link: "https://apiagrovista.com.br",
  },
  {
    id: "8",
    titulo: "Api Academia",
    descricao: "Api em java para sua academia!",
    imagem: "/img/java-dev.png",
    link: "https://academia.com.br",
  },
];

export default function Projeto() {
  const params = useParams();
  const id = params.id;

  const projeto = projetos.find((p) => p.id === id);

  if (!projeto) {
    return (
      <div className="p-10">
        <p>Projeto não encontrado</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full pt-5">
      <h1 className="pl-10 text-6xl font-bold bg-[#252525] border-t-2 border-b-2 pt-5 pb-5 border-[#333333]">
        {projeto.titulo}
      </h1>

      <div className="h-full flex flex-col items-center justify-center">
        <div
          className="w-[95%] h-[85%] flex items-end rounded-lg shadow-2xl"
          style={{
            backgroundImage: `url('${projeto.imagem}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-[#333333] w-full h-30 rounded-t-lg flex items-center justify-between">
            <div className="flex flex-col pl-10 gap-5">
              <h2 className="text-4xl font-bold ">{projeto.titulo}</h2>
              <p className="text-[#a0a0a0]">{projeto.descricao}</p>
            </div>
            <Link
              href={`${projeto.link}`}
              target="_blank"
              rel="noopener noreferrer"
              className="pr-10"
            >
              <button className="bg-[#525252] w-35 h-13 rounded-2xl hover:bg-[#686868] transition-all duration-300">
                Repositório
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
