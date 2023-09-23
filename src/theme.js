import { createContext, useState, useMemo } from "react";
import {createTheme} from "@mui/material/styles"

export const tokens = () => ({
    primary: {
        100: "#f4f2f6",
        200: "#e8e5ed",
        300: "#ddd9e4",
        400: "#d1ccdb",
        500: "#c6bfd2",
        600: "#9e99a8",
        700: "#77737e",
        800: "#4f4c54",
        900: "#28262a"
    },
    secondary: {
    100: "#f8fafa",
    200: "#f1f6f4",
    300: "#ebf1ef",
    400: "#e4ede9",
    500: "#dde8e4",
    600: "#b1bab6",
    700: "#858b89",
    800: "#585d5b",
    900: "#2c2e2e"
},
yellow: {
    100: "#faf8f6",
    200: "#f6f0ee",
    300: "#f1e9e5",
    400: "#ede1dd",
    500: "#e8dad4",
    600: "#baaeaa",
    700: "#8b837f",
    800: "#5d5755",
    900: "#2e2c2a"
},
white: {
    100: "#fdfdfd",
    200: "#fcfcfc",
    300: "#fafafa",
    400: "#f9f9f9",
    500: "#f7f7f7",
    600: "#c6c6c6",
    700: "#949494",
    800: "#636363",
    900: "#313131"
},
indigo: {
    100: "#e3e1e4",
    200: "#c7c3c9",
    300: "#aca5ae",
    400: "#908793",
    500: "#746978",
    600: "#5d5460",
    700: "#463f48",
    800: "#2e2a30",
    900: "#171518"
},
whiteAccent: {
    100: "#fdfcfb",
    200: "#fbf8f7",
    300: "#f8f5f4",
    400: "#f6f1f0",
    500: "#f4eeec",
    600: "#c3bebd",
    700: "#928f8e",
    800: "#625f5e",
    900: "#31302f"
},
})


export const themeSettings = () => {
    const colors = tokens()

    return {
        palette: {
            primary: {
                main: colors.primary[500]
            },
            secondary: {
                main: colors.secondary[500]
            }, 
            tertiary: {
                main: colors.yellow[500]
            },
            background: {
                default: colors.white[500]
            }

        },
        typography: {
            fontFamily: ["Roboto", "sans-serif"].join(","),
            fontSize: 10,
            h1: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 40
            },
            h2: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 32
            },
            h3: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 24
            },
            h4: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 20
            },
            h5: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 16
            },
            h6: {
                fontFamily: ["Roboto", "sans-serif"].join(","),
                fontSize: 14
            }

        }
    }
}


export const useMode = () => {

    const theme = createTheme(themeSettings())

    return [theme];
}