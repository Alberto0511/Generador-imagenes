"use client";

import Image from "next/image";
import img from "../../../public/images/service-3.png";
import { motion } from "framer-motion";

export default function Description() {
  return (
    <div className="py-16 px-4 sm:px-8 md:px-16 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        className="space-y-6 md:space-y-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Descripción del sitio
        </h2>
        <p className="text-white text-base md:text-lg leading-relaxed text-justify">
          El sitio web está creado con Next.js y TypeScript. Los estilos fueron implementados con Tailwind y componentes de Shadcn/UI. 
          En cuanto a la API, se consume la "AI text-to-image generator" de RapidAPI, en su versión gratuita, 
          por lo que tiene un límite de uso. Si el input no responde, puede ser porque ya caducó la API Key.
        </p>
      </motion.div>

      <motion.div
        className="relative aspect-video overflow-hidden"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
      >
        <Image
          src={img}
          alt="AI Technology Visualization"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </motion.div>
    </div>
  );
}
