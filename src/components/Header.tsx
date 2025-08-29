import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Sun, Moon, Globe } from "lucide-react";
import logoLight from "../assets/images/knc_tms_logo_light.png";
import logoDark from "../assets/images/knc_tms_logo_dark.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Button } from "./ui/button";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { toggleColorScheme } from "../store/slices/themeSlice";
import { toggleLanguage } from "../store/slices/languageSlice";

const Header: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { colorScheme, primaryColor } = useAppSelector((state) => state.theme);
  const { currentLanguage } = useAppSelector((state) => state.language);

  const handleThemeToggle = () => {
    dispatch(toggleColorScheme());
  };

  const handleLanguageToggle = () => {
    dispatch(toggleLanguage());
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        colorScheme === "dark" ? "bg-gray-900/95" : "bg-white/95"
      } backdrop-blur-sm border-b shadow-sm`}
      style={{ borderColor: primaryColor + "20" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <img
              src={colorScheme === "dark" ? logoDark : logoLight}
              alt="TMS Logo"
              className="h-16 w-auto"
            />
          </motion.div>

          {/* Navigation */}
          <NavigationMenu>
            <NavigationMenuList className="flex items-center space-x-6">
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`cursor-pointer hover:text-[${primaryColor}] transition-colors ${
                    colorScheme === "dark" ? "text-white" : "text-gray-700"
                  }`}
                  onClick={() => scrollToSection("services")}
                >
                  {t("nav.services")}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`cursor-pointer hover:text-[${primaryColor}] transition-colors ${
                    colorScheme === "dark" ? "text-white" : "text-gray-700"
                  }`}
                  onClick={() => scrollToSection("clients")}
                >
                  {t("nav.clients")}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  className={`cursor-pointer hover:text-[${primaryColor}] transition-colors ${
                    colorScheme === "dark" ? "text-white" : "text-gray-700"
                  }`}
                  onClick={() => scrollToSection("about")}
                >
                  {t("nav.about")}
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={
                    colorScheme === "dark" ? "text-white" : "text-gray-700"
                  }
                >
                  {t("nav.status")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-48">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm">All Systems Operational</span>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={
                    colorScheme === "dark" ? "text-white" : "text-gray-700"
                  }
                >
                  {t("nav.more")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4 w-48 space-y-2">
                    <NavigationMenuLink
                      className="block p-2 hover:bg-gray-100 rounded cursor-pointer"
                      onClick={() => scrollToSection("contact")}
                    >
                      Contact
                    </NavigationMenuLink>
                    <NavigationMenuLink className="block p-2 hover:bg-gray-100 rounded cursor-pointer">
                      Support
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Controls */}
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLanguageToggle}
              className={`p-2 ${
                colorScheme === "dark"
                  ? "text-white hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Globe className="w-4 h-4" />
              <span className="ml-1 text-xs">
                {currentLanguage.toUpperCase()}
              </span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleThemeToggle}
              className={`p-2 ${
                colorScheme === "dark"
                  ? "text-white hover:bg-gray-800"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {colorScheme === "dark" ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
