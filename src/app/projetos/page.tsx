"use client";

import { useState } from "react";
import Link from "next/link";

interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  imagem: string;
  icon?: string;
  link: string;
}

const projetos: Projeto[] = [
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

export default function Projetos() {
  const [expandido, setExpandido] = useState(false);
  const projetosVisiveis = expandido ? projetos : projetos.slice(0, 3);

  return (
    <div className="flex flex-col h-full pt-5">
      <h1 className="pl-10 text-6xl font-bold bg-[#252525] border-t-2 border-b-2 pt-5 pb-5 border-[#333333]">
        Projetos
      </h1>

      <div className="flex-1 px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projetosVisiveis.map((projeto) => (
            <div
              key={projeto.id}
              className="rounded-3xl overflow-hidden min-h-74 hover:shadow-2xl hover:scale-105 transition-all duration-400 relative group"
              style={{
                backgroundImage: `url('${projeto.imagem}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all" />
              <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-2">
                    {projeto.titulo}
                  </h2>
                  <p className="text-white/80">{projeto.descricao}</p>
                </div>
                <Link href={`/projetos/${projeto.id}`}>
                  <button className="mt-6 px-4 py-2 bg-white/20 hover:bg-white/30 text-white rounded-lg text-sm font-medium transition w-fit">
                    Saiba Mais
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {projetos.length > 3 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setExpandido(!expandido)}
              className="px-8 py-3 bg-[#333333] hover:bg-[#444444] text-white rounded-full font-medium transition-colors"
            >
              {expandido ? "Ver Menos" : "Ver Mais"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
