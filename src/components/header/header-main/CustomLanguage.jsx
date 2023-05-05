import React, { useEffect, useState } from "react";
import { Stack } from "@mui/material";
import toast from "react-hot-toast";
import i18n, { t } from "i18next";
import { useTheme } from "@mui/material/styles";
import { useSettings } from "../../../contexts/use-settings";
import { LanguageSwitchButton } from "../Header.style";

const getValues = (settings) => ({
  direction: settings.direction,
  responsiveFontSizes: settings.responsiveFontSizes,
  theme: settings.theme,
});

const CustomLanguage = () => {
  const [language, setLanguage] = useState("");
  const { settings, saveSettings } = useSettings();
  const [values, setValues] = useState(getValues(settings));

  useEffect(() => {
    if (typeof window !== "undefined") {
      let languageSetting = JSON.parse(
        localStorage.getItem("language-setting")
      );
      if (languageSetting) {
        setLanguage(languageSetting);
        i18n.changeLanguage(languageSetting);
      }
    }
  }, [language]);

  useEffect(() => {
    settings && setValues(settings);
  }, [settings]);

  const handleChangeLanguage = (lan) => {
    i18n.changeLanguage(lan);
    setLanguage(lan);
    localStorage.setItem("language-setting", JSON.stringify(lan));
    if (lan === "en" || lan === "bn") {
      saveSettings({
        ...values,
        direction: "ltr",
      });
    } else {
      saveSettings({
        ...values,
        direction: "rtl",
      });
    }
    toast.success(t("Language Changed"));
  };

  return (
    <>
      <Stack direction="row">
        <LanguageSwitchButton
          active={language == "bn" ? "true" : "false"}
          onClick={() => handleChangeLanguage("bn")}>
          {t("Bangla")}
        </LanguageSwitchButton>
        <LanguageSwitchButton
          active={language == "en" ? "true" : "false"}
          onClick={() => handleChangeLanguage("en")}>
          {t("English")}
        </LanguageSwitchButton>
      </Stack>
    </>
  );
};

CustomLanguage.propTypes = {};

export default CustomLanguage;
