import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Clock, FolderKanban, BarChart3 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useAppSelector } from "../store/hooks";

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();
  const { colorScheme, primaryColor } = useAppSelector((state) => state.theme);

  const services = [
    {
      icon: Clock,
      title: t("services.service1.title"),
      description: t("services.service1.description"),
    },
    {
      icon: FolderKanban,
      title: t("services.service2.title"),
      description: t("services.service2.description"),
    },
    {
      icon: BarChart3,
      title: t("services.service3.title"),
      description: t("services.service3.description"),
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  return (
    <section
      id="services"
      className={`py-20 ${colorScheme === "dark" ? "bg-gray-800" : "bg-white"}`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              colorScheme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("services.title")}
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("services.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className={`h-full transition-all duration-300 hover:shadow-xl hover:scale-105 border-2 ${
                    colorScheme === "dark"
                      ? "bg-gray-900 border-gray-700 hover:border-gray-600"
                      : "bg-white border-gray-200 hover:border-gray-300"
                  }`}
                  style={{
                    borderColor:
                      colorScheme === "light" ? primaryColor + "20" : undefined,
                  }}
                >
                  <CardHeader className="text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: primaryColor + "10",
                      }}
                    >
                      <Icon
                        className="w-8 h-8"
                        style={{ color: primaryColor }}
                      />
                    </motion.div>
                    <CardTitle
                      className={`text-xl mb-2 ${
                        colorScheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription
                      className={`text-center ${
                        colorScheme === "dark"
                          ? "text-gray-300"
                          : "text-gray-600"
                      }`}
                    >
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Hours Tracked Daily" },
              { number: "99.9%", label: "Accuracy Rate" },
              { number: "24/7", label: "Support" },
              { number: "500+", label: "Companies Trust Us" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className="text-3xl md:text-4xl font-bold mb-2"
                  style={{ color: primaryColor }}
                >
                  {stat.number}
                </div>
                <div
                  className={`text-sm ${
                    colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
