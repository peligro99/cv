import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "FEDECOLDE",
      role: "Delegado de eSport",
      url: "https://fb.watch/c9AOj4Pzia/",
      start: "Marzo 2022",
      end: "Marzo 2022",
      shortDescription: [
        "Fue Electo delegado de Brawl Strs para la Esports en FEDECOLDE transmitido por el canal Telecafe",
        "Adicionalmente, realice parte de la publicidad como banner, perfiles e imagenes de la Esports",
        "Esta experiencia me permitio adquirir habilidades comunicativas con los participantes, la organizacion del evento",
      
        
      ],
    },
    {
      name: "JC Studios",
      role: "Chatbot Developer",
      url: "https://www.jcstudios.com.co/",
      start: "Enero 2022",
      end: "Presente",
      shortDescription: [
        "Tuve experiencia trabajando con la plataforma android y dialogflow.",
        "Durante mi trabajo tuve que utilizar varias tecnologias como Java, Dialogflow, Node.js, API de whatsapp",
        "Dentro de mis funciones era realizar el analisis, diseño y ejecucion de un bot que permitiera a las modelos comunicarse con los clientes de forma optimizada",
      
      ],
    },
    {
      name: "Flirteo",
      role: "Chatbot Developer",
      url: "https://www.instagram.com/flirteo.oficial/",
      start: "Enero 2022",
      end: "Presente",
      shortDescription: [
        "Para el ChatBot implemente funciones como la de envio de archivos, PDF, Videos, Imágenes, Contactos,integre el envío automático de notas de voz, Captación de datos o registro de usuario",
        "Realice un sistema de eMail, SMS Marketing y recordatorios por Whatsapp",
        "Dentro de mis habilidades pude trabajr bajo la modalidad Scrum con el equipo de desarrollo",
      

      ],
    },
    {
      name: "Tasker Community",
      role: "Creador de contenido",
      url: "https://www.reddit.com/r/tasker/?rdt=38458",
      start: "Abril 2021",
      end: "Presente",
      shortDescription: [
        "He realizado durante mas de 2 años aportes a problemas de los usuarios que utilizan tasker y sus plugins",
        "Me ha permitido comunicarme de forma escrita en el idioma ingles con los miembros de la comunidad",
        
      ],
    },
  
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <div className="title">
        <h2>He trabajado con</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}
              >
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
