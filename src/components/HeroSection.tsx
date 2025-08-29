import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { useAppSelector } from "../store/hooks";

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const { colorScheme, primaryColor, secondaryColor } = useAppSelector(
    (state) => state.theme
  );

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center relative overflow-hidden ${
        colorScheme === "dark"
          ? "bg-gray-900"
          : "bg-gradient-to-br from-white to-gray-50"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${primaryColor} 2px, transparent 2px), radial-gradient(circle at 75% 75%, ${secondaryColor} 2px, transparent 2px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`text-5xl md:text-7xl font-bold mb-6 ${
              colorScheme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("hero.title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className={`text-xl md:text-2xl mb-8 ${
              colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
            style={{
              color: colorScheme === "light" ? primaryColor : undefined,
            }}
          >
            {t("hero.subtitle")}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto ${
              colorScheme === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            {t("hero.description")}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button
              onClick={scrollToServices}
              className="text-white px-8 py-6 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: primaryColor }}
            >
              {t("hero.cta")}
            </Button>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-16 h-16 rounded-full opacity-20"
            style={{ backgroundColor: primaryColor }}
          />
          <motion.div
            animate={{
              y: [0, 20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute top-40 right-20 w-12 h-12 rounded-full opacity-20"
            style={{ backgroundColor: secondaryColor }}
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-40 left-20 w-8 h-8 rounded-full opacity-20"
            style={{ backgroundColor: primaryColor }}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToServices}
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <span
            className={`text-sm mb-2 font-medium ${
              colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Scroll to explore
          </span>
          <motion.div
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.5,
            }}
          >
            <ChevronDown className="w-6 h-6" style={{ color: primaryColor }} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
