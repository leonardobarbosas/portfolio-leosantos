"use client";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Contact() {
  const tipos = [
    "Oportunidade de trabalho",
    "Projeto freelance",
    "Networking",
    "Outro",
  ];

  return (
    <div className="flex flex-col h-full pt-5">
      <h1 className="pl-10 text-6xl font-bold bg-[#252525] border-t-2 border-b-2 pt-5 pb-5 border-[#333333]">
        Contato
      </h1>

      <div className="flex flex-col h-full items-center justify-around">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58537.67616646857!2d-46.92372134957773!3d-23.510741531467957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf03dd6a1db995%3A0x70548836d6e4a9a2!2sBarueri%2C%20SP!5e0!3m2!1spt-BR!2sbr!4v1782193564917!5m2!1spt-BR!2sbr"
          width="90%"
          height="100"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-2xs"
        ></iframe>

        <div className="flex flex-row w-9/10 gap-30">
          <div className="informations w-1/3 flex flex-col gap-6">
            <div className="flex w-full gap-4 items-center">
              <Phone className="w-15 h-15 text-[#007CED]" />
              <div className="flex flex-col">
                <h3 className="text-white font-bold ">+55 (11) 99633-6638</h3>
                <p className="text-[#a0a0a0] ">
                  Disponível para contato via WhatsApp sobre oportunidades,
                  propostas e conexões profissionais.
                </p>
              </div>
            </div>

            <div className="flex w-full gap-4 items-center">
              <MapPin className="w-15 h-15 text-[#007CED]" />
              <div className="flex flex-col">
                <h3 className="text-white font-bold ">Barueri - SP</h3>
                <p className="text-[#a0a0a0] ">
                  Disponível para trabalho presencial na região de Barueri e São
                  Paulo, ou remoto em qualquer localidade.
                </p>
              </div>
            </div>

            <div className="flex w-full gap-4 items-center">
              <Mail className="w-15 h-15 text-[#007CED]" />
              <div className="flex flex-col">
                <h3 className="text-white font-bold ">
                  leonardobarbosantos@gmail.com
                </h3>
                <p className="text-[#a0a0a0] ">
                  Entre em contato pelo e-mail para oportunidades profissionais,
                  projetos ou networking.
                </p>
              </div>
            </div>
          </div>

          <div className="w-2/3 flex items-center justify-center">
            <div className="w-full">
              <h1 className="text-white font-bold text-2xl mb-6">
                Fale comigo!
              </h1>

              <div className="flex gap-4">
                <div className="flex flex-col gap-3 w-1/3">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 rounded-md text-white text-sm outline-none bg-[#2a2a2a] border border-[#3a3a3a] focus:border-[#007CED] transition-colors duration-200"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-md text-white text-sm outline-none bg-[#2a2a2a] border border-[#3a3a3a] focus:border-[#007CED] transition-colors duration-200"
                  />
                  <select className="w-full px-4 py-3 rounded-md text-sm outline-none bg-[#2a2a2a] border border-[#3a3a3a] text-[#a0a0a0] focus:border-[#007CED] transition-colors duration-200">
                    <option value="" disabled>
                      Tipo de mensagem
                    </option>
                    {tipos.map((t) => (
                      <option key={t} value={t} className="text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>

                <textarea
                  placeholder="Mensagem.."
                  className="w-2/3 px-4 py-3 rounded-md text-white text-sm outline-none resize-none bg-[#2a2a2a] border border-[#3a3a3a] focus:border-[#007CED] transition-colors duration-200"
                />
              </div>

              <button className="mt-4 px-6 py-2 rounded-full text-white text-sm font-medium border-2 border-[#007CED] bg-transparent hover:bg-[#007CED] transition-all duration-300">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
