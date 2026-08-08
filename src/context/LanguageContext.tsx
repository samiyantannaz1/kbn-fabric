import { createContext } from "react";

export type Language = "en" | "fa";

export type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined);