import { createContext } from "react";

export interface LocaleProps {
  value: "en" | "de";
  change: (lang: "en" | "de") => void;
}

const LanguageContext = createContext<LocaleProps>({
  value: "en",
  change: lang => {}
});

export default LanguageContext;
