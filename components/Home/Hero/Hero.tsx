"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { Loader } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

const Hero = () => {
    const [promt, setPromt] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const handleImageGeneration = async () => {
        setLoading(true);
        const options = {
            method: "POST",
            url: "https://ai-text-to-image-generator-api.p.rapidapi.com/realistic",
            headers: {
                "x-rapidapi-key": "795ebfef0amshe36301a1b05e8b4p1b79cejsnd1a26453359c",
                "x-rapidapi-host": "ai-text-to-image-generator-api.p.rapidapi.com",
                "Content-Type": "application/json",
            },
            data: {
                inputs: promt,
            },
        };
        try {
            const response = await axios.request(options);
            setImage(response?.data.url);
            toast.success("Imagen generada con éxito");
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error("Ha ocurrido un error");
            }
        } finally {
            setLoading(false);
        }
    };

    const handleClearImage = () => {
        setImage(""); 
        setPromt(""); 
    };

    const handleDownloadImage = () => {
        const link = document.createElement("a");
        link.target = "_blank";
        link.href = image;
        link.download = "generated-img.jpg";
        link.click();
    };

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeInOut" },
        },
    };

    return (
        <motion.div
            className="w-[95%] min-h-screen relative mx-auto mt-[20vh]"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="relative z-10 text-white flex flex-col items-center justify-center">
                <motion.h1
                    className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                >
                    Crea hermosas imágenes con <br /> Inteligencia artificial
                </motion.h1>

                <motion.p
                    className="mt-10 text-sm md:text-base font-semibold text-center text-gray-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                >
                    Empieza a crear imágenes con el poder de la IA
                </motion.p>

                <motion.div
                    className="h-11 md:h-16 w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] backdrop-blur-md bg-black bg-opacity-20 border border-gray-300 rounded-lg mt-12 px-2 md:px-6 flex items-center justify-between shadow-lg"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <input
                        type="text"
                        placeholder="Ingrese algo para poder generar"
                        className="h-full bg-transparent text-white rounded-lg outline-none w-full block flex-1 placeholder:text-gray-200 placeholder:opacity-80 text-sm sm:text-base px-2"
                        value={promt}
                        onChange={(e) => setPromt(e.target.value)}
                    />
                    <Button
                        onClick={handleImageGeneration}
                        variant="default"
                        size="lg"
                        className="bg-gradient-to-r from-purple-700 to-blue-600 text-white hover:from-purple-800 hover:to-blue-700 "
                    >
                        Crear
                    </Button>
                </motion.div>

                {loading && (
                    <motion.div
                        className="mt-8 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 bg-[length:200%] bg-right animate-bounce-slow rounded-lg shadow-lg flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Loader className="text-gray-300 animate-spin" size={40} />
                    </motion.div>
                )}

                {!loading && !image && (
                    <motion.div
                        className="mt-8 w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 rounded-lg shadow-lg flex items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-gray-400 text-center font-semibold">Vista previa de tu imagen</p>
                    </motion.div>
                )}

                {image && (
                    <motion.div
                        className="mt-8 flex flex-col items-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src={image}
                            alt="ai image"
                            className="max-w-full h-[500px] rounded-lg shadow-lg"
                            loading="lazy"
                        />
                        <div className="flex gap-4 mt-4">
                            <Button
                                onClick={handleDownloadImage}
                                className="bg-gradient-to-r from-purple-700 to-blue-600 text-white hover:from-purple-800 hover:to-blue-700"
                            >
                                Descargar
                            </Button>
                            <Button
                                onClick={handleClearImage}
                                className="bg-gradient-to-r from-red-600 to-orange-500 text-white hover:from-red-700 hover:to-orange-600"
                            >
                                Generar otra imagen
                            </Button>
                        </div>
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default Hero;
