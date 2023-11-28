import { extendTheme } from "@chakra-ui/react";

export const chakraTheme = extendTheme({
  colors: {
    primary: "#FF9037",
    primaryDark: "#FF6F00",
    subColor: "#FBF6F0",
    subSubColor: "#FFDA77",
    accentColor: "#3DB2FF",
    textPrimary: "#1A202C",
    textGray: "#A0AEC0",
    textLightGary: "#CBD5E0",
    textDarkGray: "#718096",
  },
  styles: {
    global: {
      html: { height: "100%" },
      body: { height: "100%" },
    },
  },
});
