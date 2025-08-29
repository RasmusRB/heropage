import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useAppSelector } from "../store/hooks";
import logoLight from "../assets/images/knc_tms_logo_light.png";
import logoDark from "../assets/images/knc_tms_logo_dark.png";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { colorScheme, primaryColor, secondaryColor } = useAppSelector(
    (state) => state.theme
  );

  return (
    <footer
      id="contact"
      className={`${
        colorScheme === "dark" ? "bg-gray-900" : "bg-gray-50"
      } border-t`}
      style={{ borderColor: primaryColor + "20" }}
    >
      <div className="container mx-auto px-4 py-12">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          <div className="text-center md:text-left">
            <h3
              className={`text-lg font-semibold mb-4 ${
                colorScheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              {t("contact.title")}
            </h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5" style={{ color: primaryColor }} />
                <span
                  className={`text-sm ${
                    colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("contact.address")}
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-5 h-5" style={{ color: primaryColor }} />
                <span
                  className={`text-sm ${
                    colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("contact.phone")}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <div className="space-y-3 mt-8 md:mt-0">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail className="w-5 h-5" style={{ color: primaryColor }} />
                <span
                  className={`text-sm ${
                    colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("contact.email")}
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Clock className="w-5 h-5" style={{ color: primaryColor }} />
                <span
                  className={`text-sm ${
                    colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("contact.hours")}
                </span>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h4
              className={`font-medium mb-3 ${
                colorScheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Services
            </h4>
            <ul className="space-y-2">
              <li>
                <span
                  className={`text-sm ${
                    colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Time Tracking
                </span>
              </li>
              <li>
                <span
                  className={`text-sm ${
                    colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Project Management
                </span>
              </li>
              <li>
                <span
                  className={`text-sm ${
                    colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Analytics & Reports
                </span>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4
              className={`font-medium mb-3 ${
                colorScheme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Links
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  className={`text-sm hover:text-[${primaryColor}] transition-colors ${
                    colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("footer.privacy")}
                </button>
              </li>
              <li>
                <button
                  className={`text-sm hover:text-[${primaryColor}] transition-colors ${
                    colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {t("footer.terms")}
                </button>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div
          className={`border-t pt-8 text-center ${
            colorScheme === "dark" ? "border-gray-700" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <img
                src={colorScheme === "dark" ? logoDark : logoLight}
                alt="TMS Logo"
                className="h-8 w-auto"
              />
              <span
                className={`text-sm ${
                  colorScheme === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {t("footer.copyright")}
              </span>
            </div>
            <div className="flex space-x-6">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                style={{ backgroundColor: secondaryColor + "20" }}
              >
                <span style={{ color: primaryColor }}>f</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                style={{ backgroundColor: secondaryColor + "20" }}
              >
                <span style={{ color: primaryColor }}>t</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
                style={{ backgroundColor: secondaryColor + "20" }}
              >
                <span style={{ color: primaryColor }}>in</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
