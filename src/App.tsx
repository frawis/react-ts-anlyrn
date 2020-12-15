import React from "react";
import Home from "pages/Home";
import { LanguageContext } from "contexts";
import { useState } from "react";

function App() {
  const [languange, setLanguage] = useState<"en" | "de">("en");

  const changeLanguage = (lang: "en" | "de") => setLanguage(lang);

  return (
    <LanguageContext.Provider
      value={{ value: languange, change: changeLanguage }}
    >
      <Home />
    </LanguageContext.Provider>
  );
}

export default App;
