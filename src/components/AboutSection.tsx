import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Award } from "lucide-react";
import { useAppSelector } from "../store/hooks";

const AboutSection: React.FC = () => {
  const { t } = useTranslation();
  const { colorScheme, primaryColor } = useAppSelector((state) => state.theme);

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in every project and service we deliver.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace cutting-edge technologies and innovative solutions.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work closely with our clients to achieve shared success.",
    },
    {
      icon: Award,
      title: "Quality",
      description: "We maintain the highest standards in all our deliverables.",
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${colorScheme === "dark" ? "bg-gray-800" : "bg-white"}`}
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
            {t("about.title")}
          </h2>
          <p
            className={`text-xl max-w-2xl mx-auto mb-8 ${
              colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {t("about.subtitle")}
          </p>
          <p
            className={`text-lg max-w-3xl mx-auto ${
              colorScheme === "dark" ? "text-gray-400" : "text-gray-700"
            }`}
          >
            {t("about.description")}
          </p>
        </motion.div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: primaryColor + "10",
                  }}
                >
                  <Icon className="w-8 h-8" style={{ color: primaryColor }} />
                </motion.div>
                <h3
                  className={`text-xl font-semibold mb-3 ${
                    colorScheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {value.title}
                </h3>
                <p
                  className={`${
                    colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3
            className={`text-3xl font-bold mb-12 ${
              colorScheme === "dark" ? "text-white" : "text-gray-900"
            }`}
          >
            Our Team
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Lars Nielsen",
                role: "CEO & Founder",
                initials: "LN",
              },
              {
                name: "Maria Andersen",
                role: "CTO",
                initials: "MA",
              },
              {
                name: "Erik Larsen",
                role: "Lead Developer",
                initials: "EL",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className={`p-6 rounded-lg transition-all duration-300 ${
                  colorScheme === "dark"
                    ? "bg-gray-900 hover:bg-gray-700"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                <div
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-xl"
                  style={{ backgroundColor: primaryColor }}
                >
                  {member.initials}
                </div>
                <h4
                  className={`text-xl font-semibold mb-2 ${
                    colorScheme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  {member.name}
                </h4>
                <p
                  className={`${
                    colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Company Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "2019", label: "Founded" },
            { number: "50+", label: "Team Members" },
            { number: "1000+", label: "Projects Completed" },
            { number: "25+", label: "Countries Served" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className="text-4xl font-bold mb-2"
                style={{ color: primaryColor }}
              >
                {stat.number}
              </div>
              <div
                className={`text-lg ${
                  colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
