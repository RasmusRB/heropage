import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useAppSelector } from "../store/hooks";

const ClientsSection: React.FC = () => {
  const { t } = useTranslation();
  const { colorScheme, primaryColor } = useAppSelector((state) => state.theme);

  const clients = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLab", logo: "IL" },
    { name: "DataFlow", logo: "DF" },
    { name: "CloudTech", logo: "CT" },
    { name: "SecureNet", logo: "SN" },
    { name: "NextGen", logo: "NG" },
  ];

  return (
    <section
      id="clients"
      className={`py-20 ${
        colorScheme === "dark" ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2
            className={`text-4xl md:text-5xl font-bold mb-6 ${
              colorScheme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            {t("clients.title")}
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto ${
              colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("clients.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className={`text-center p-6 rounded-lg transition-all duration-300 ${
                colorScheme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-white hover:bg-gray-50"
              } shadow-md hover:shadow-lg`}
            >
              <div
                className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg"
                style={{ backgroundColor: primaryColor }}
              >
                {client.logo}
              </div>
              <h3
                className={`font-semibold ${
                  colorScheme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                {client.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "TMS has transformed our IT infrastructure. Their expertise is unmatched.",
                author: "John Doe",
                company: "TechCorp",
              },
              {
                quote:
                  "Excellent service and support. Highly recommend their cloud solutions.",
                author: "Jane Smith",
                company: "InnovateLab",
              },
              {
                quote:
                  "Professional team with deep technical knowledge. Great partnership.",
                author: "Mike Johnson",
                company: "DataFlow",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`p-6 rounded-lg ${
                  colorScheme === "dark"
                    ? "bg-gray-800 border border-gray-700"
                    : "bg-white border border-gray-200"
                } shadow-md`}
              >
                <div className="mb-4">
                  <div
                    className="text-4xl mb-2"
                    style={{ color: primaryColor }}
                  >
                    "
                  </div>
                  <p
                    className={`italic ${
                      colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {testimonial.quote}
                  </p>
                </div>
                <div className="flex items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold mr-3"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <div
                      className={`font-semibold ${
                        colorScheme === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {testimonial.author}
                    </div>
                    <div
                      className={`text-sm ${
                        colorScheme === "dark"
                          ? "text-gray-400"
                          : "text-gray-500"
                      }`}
                    >
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
