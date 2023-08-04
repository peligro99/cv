import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { useInView, motion } from "framer-motion";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <motion.div
      className="about"
      id="about"
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
        <h2>Sobre mi</h2>
      </div>
      <div className="about-grid">
        <div className="about-grid-info">
          <p className="about-grid-info-text">
            Hola! Mi nombre es Daniel Jimenez y me apasiona crear bots y
            chatbots para mis clientes. Mis intereses sobre estan tecnologias
            que empezaron con mi primer proyecto que consistio de un chatbot
            para JC Studios con Tasker una aplicacion para mobiles.
          </p>
          <p className="about-grid-info-text">
          En la actualidad me especializo en soluciones de alta calidad para
          nuestros clientes cumpliendo sus espectativas en{" "}
            <Link href="https://kubo.net.co/" target="_blank" className="link">
           Kubo.
        </Link>
          </p>

          <p className="about-grid-info-text">
          Además, comparto mis conocimientos y mi pasión con el mundo a través 
          de mi canal de YouTube, donde muestro cómo crear aplicaciones completas.
          </p>
          <p className="about-grid-info-text">
            Yo estoy trabajando en un nuevo proyecto llamado Wamarketing un bot
            que permite difundir publicidad masiva por whatsapp
            
          </p>
          <p className="about-grid-info-text">
          He aquí algunas tecnologías con las que he estado trabajando recientemente:
          </p>
          <ul className="about-grid-info-list">
            <li className="about-grid-info-list-item">Tasker</li>
            <li className="about-grid-info-list-item">React Native</li>
            <li className="about-grid-info-list-item">Dialogflow</li>
            <li className="about-grid-info-list-item">Node.js</li>
            <li className="about-grid-info-list-item">Angular</li>
            <li className="about-grid-info-list-item">Laravel</li>
          </ul>
        </div>
        <div className="about-grid-photo">
          <div className="overlay"></div>
          <div className="overlay-border"></div>
          <div className="about-grid-photo-container">
            <Image src="/Daniel.jpeg" alt="profile" fill />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
