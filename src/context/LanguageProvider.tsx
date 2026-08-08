import { useEffect, useState, type ReactNode } from "react";
import { LanguageContext, type Language } from "./LanguageContext";

type Props = {
  children: ReactNode;
};

export function LanguageProvider({ children }: Props) {
  const [language, setLanguage] = useState<Language>("fa");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "fa" : "en"));
  };

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir =
      language === "fa" ? "rtl" : "ltr";
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}