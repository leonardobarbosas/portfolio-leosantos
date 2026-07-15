"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

const projetos = [
  {
    id: "1",
    titulo: "ConectCar",
    descricao: "O seu conectador de veículo mais seguro!",
    desc_long:
      "A ConectCar é uma empresa que oferece soluções de mobilidade urbana, incluindo pagamento automático de pedágios e estacionamentos, além de serviços de rastreamento e monitoramento de veículos. O projeto desenvolvido para a ConectCar visa proporcionar uma experiência digital eficiente e intuitiva para os usuários, facilitando o acesso aos serviços oferecidos pela empresa.",
    imagem: "/img/connectcar.png",
    link: "https://github.com/leonardobarbosas/challenge-front-4",
  },
  {
    id: "2",
    titulo: "Vini Arquitetos",
    descricao:
      "Projeto desenvolvido para o escritório de arquitetura Vini Arquitetos, com foco em design moderno e funcionalidade.",
    desc_long:
      "O projeto para o escritório de arquitetura Vini Arquitetos foi desenvolvido com o objetivo de criar uma presença online que refletisse a identidade da empresa, destacando seus projetos e serviços de forma clara e atraente. A plataforma oferece aos visitantes uma experiência visual envolvente, permitindo que explorem os trabalhos realizados pelo escritório e entrem em contato facilmente para consultas e colaborações.",
    imagem: "/img/vini.png",
    link: "https://github.com/leonardobarbosas/vini-arquiteto",
  },
  {
    id: "3",
    titulo: "Vanbora",
    descricao: "Solução para seu transporte escolar!",
    desc_long:
      "O projeto Vanbora foi desenvolvido para oferecer uma solução eficiente e segura para o transporte escolar, conectando pais, alunos e motoristas de forma prática. A plataforma permite o acompanhamento em tempo real das rotas, garantindo a segurança das crianças e proporcionando tranquilidade aos pais. Além disso, oferece funcionalidades de comunicação direta entre os envolvidos, facilitando a gestão do transporte escolar.",
    imagem: "/img/vanbora.png",
    link: "https://github.com/leonardobarbosas/MOBILE_TCC-2023-1-G2",
  },
  {
    id: "4",
    titulo: "Lf Energy",
    descricao:
      "Projetada para conectar pessoas e empresas às melhores soluções de energia renovável",
    desc_long:
      "A Lf Energy é uma empresa dedicada a fornecer soluções de energia renovável, promovendo a sustentabilidade e a eficiência energética. O projeto desenvolvido para a Lf Energy visa criar uma plataforma digital que facilite o acesso às informações sobre energia limpa, conectando consumidores e empresas com as melhores opções disponíveis no mercado. A interface intuitiva permite que os usuários explorem diferentes soluções, obtenham cotações e entrem em contato com especialistas para implementar projetos de energia renovável.",
    imagem: "/img/lfenergy.png",
    link: "https://github.com/leonardobarbosas/gs-frontend",
  },
  {
    id: "5",
    titulo: "NovaOnda",
    descricao:
      "Projeto inovador para surfistas e amantes do mar, conectando pessoas e experiências.",
    desc_long:
      "A NovaOnda é uma plataforma digital voltada para surfistas e entusiastas do mar, oferecendo uma experiência única de conexão com a comunidade de surf. O projeto visa proporcionar aos usuários acesso a informações sobre condições de surf, eventos, locais para surfar e oportunidades de socialização com outros surfistas. A interface amigável permite que os usuários compartilhem experiências, encontrem parceiros de surf e se mantenham atualizados sobre as últimas tendências e notícias do mundo do surf.",
    imagem: "/img/novaonda.png",
    link: "https://github.com/leonardobarbosas/novaonda-front-end",
  },
  {
    id: "6",
    titulo: "Afetto",
    descricao:
      "Conecte seu pet com o mundo! Plataforma inovadora para cuidados e bem-estar animal.",
    desc_long:
      "A Afetto é uma plataforma digital dedicada ao cuidado e bem-estar animal, oferecendo recursos e serviços para donos de pets. O projeto visa facilitar a conexão entre os proprietários de animais de estimação e profissionais especializados, como veterinários, adestradores e cuidadores. A plataforma proporciona acesso a informações sobre saúde, alimentação, treinamento e atividades recreativas para pets, promovendo uma experiência enriquecedora para os animais e seus donos.",
    imagem: "/img/afetto.png",
    link: "https://github.com/Afetto/front-end-afetto",
  },
  {
    id: "7",
    titulo: "Api Rest Agrovista",
    descricao: "Api Rest em Java focada na solução agrovista!",
    desc_long:
      "A Api Agrovista é uma solução desenvolvida em Java para atender às necessidades do setor agrícola, oferecendo funcionalidades específicas para otimizar processos e melhorar a eficiência das operações. A plataforma permite a integração de dados agrícolas, monitoramento de culturas, gestão de recursos e análise de informações relevantes para agricultores e empresas do setor. Com foco na inovação e na sustentabilidade, a Api Agrovista busca fornecer ferramentas que auxiliem na tomada de decisões estratégicas e no aumento da produtividade agrícola.",
    imagem: "/img/java-dev.png",
    link: "https://github.com/leonardobarbosas/api-agrovista",
  },
  {
    id: "8",
    titulo: "Api Rest Academia",
    descricao: "Api Rest em java para sua academia!",
    desc_long:
      "A Api Academia é uma solução desenvolvida em Java para atender às necessidades de academias e centros de fitness, oferecendo funcionalidades específicas para otimizar a gestão de clientes, treinos e atividades. A plataforma permite o gerenciamento de inscrições, acompanhamento de desempenho, agendamento de aulas e comunicação com os alunos. Com foco na eficiência e na experiência do usuário, a Api Academia busca fornecer ferramentas que auxiliem na administração do negócio e no engajamento dos clientes.",
    imagem: "/img/java-dev.png",
    link: "https://github.com/leonardobarbosas/api-rest-academia",
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
          <div className="bg-[#333333] flex flex-col w-full h-40 hover:h-60 transition-all duration-300 rounded-t-lg items-center justify-between group">
            <div className="w-full h-full flex items-center justify-between">
              <div className="flex flex-col pl-10 gap-5">
                <h2 className="text-4xl font-bold">{projeto.titulo}</h2>
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

            <div className="w-full h-0 group-hover:h-30 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-between px-10 pb-5">
              <div className="flex flex-col gap-3">
                <p className="text-[#a0a0a0]">{projeto.desc_long}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
