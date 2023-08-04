import Button from "@/components/Button";
import React from "react";
import { motion } from "framer-motion";
function Contact() {
  return (
    <motion.div
      className="contact"
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, y: -50 },
        hidden: { opacity: 0, y: 0 },
      }}
    >
      <h2 className="contact-title">Contacto</h2>
      <h2 className="contact-sub-title">Póngase en contacto</h2>
      <p className="contact-text">
      Mi bandeja de entrada está siempre abierta. 
      Si tienes alguna pregunta o simplemente quieres saludarme, 
      ¡haré todo lo posible por responderte!
      </p>
      <div className="contact-cta">
        <Button link="mailto:daniiel.jimenez.9@gmail.com" text="Di Hola" />
      </div>
    </motion.div>
  );
}

export default Contact;
