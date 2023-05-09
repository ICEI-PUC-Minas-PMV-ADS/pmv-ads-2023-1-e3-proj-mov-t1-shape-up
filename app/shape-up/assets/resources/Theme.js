import { extendTheme } from "native-base";

export const theme = extendTheme({
    colors: {
        primary: {
          "50": "#ffe1e1",
          "100": "#ffbaba",
          "200": "#ff9292",
          "300": "#ff6a6a",
          "400": "#ff4444",
          "500": "#f93131",
          "600": "#f12121",
          "700": "#e41717",
          "800": "#c81b1b",
          "900": "#ad1f1f"
        },
        secondary: {
            "50": "#51515b",
            "100": "#474141",
            "200": "#3e3b3b",
            "300": "#353535",
            "400": "#2e2e2e",
            "500": "#292a2a",
            "600": "#202020",
            "700": "#1f2323",
            "800": "#1a1f1f",
            "900": "#151515"
        }
      },
    components: {
      Button: {
        variants: {
          outline: ({
            colorScheme
          }) => {
            return {
              borderColor: `${colorScheme}.400`,
              _text: {
                color: `${colorScheme}.400`
              }
            };
          }
        }
      }
    }
});