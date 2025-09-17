import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,jsx}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node
      } 
    },
    rules: {
      // 🔴 ERRORES CRÍTICOS (deben arreglarse)
      "no-undef": "error",                   // Variables no definidas
      "no-unused-vars": "error",             // Variables no usadas
      "no-const-assign": "error",            // Reasignar constantes
      "no-dupe-keys": "error",               // Keys duplicadas en objetos
      
      // 🟡 WARNINGS (buenas prácticas)
      "no-console": "warn",                  // Console.log en producción
      "eqeqeq": "warn",                      // Preferir === en lugar de ==
      "curly": "warn",                       // Llaves siempre en condicionales
      
      // 🔧 ESTILO (pueden auto-fixearse)
      "semi": ["warn", "always"],            // Puntos y comas
      "quotes": ["warn", "single"],          // Comillas simples
      "indent": ["warn", 2],                 // Indentación de 2 espacios
      "comma-dangle": ["warn", "never"]      // Sin comas al final
    }
  },
  {
    // Configuración específica para React
    files: ["**/*.jsx"],
    plugins: {
      react: pluginReact
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      
      // 🔧 REACT - Reglas importantes
      "react/react-in-jsx-scope": "off",     // No necesario en React 17+
      "react/prop-types": "off",             // Opcional en proyectos modernos
      "react/jsx-key": "error",              // Keys en listas (IMPORTANTE)
      "react/jsx-no-duplicate-props": "error", // Props duplicados
      "react/jsx-no-undef": "error",         // Componentes no definidos
      
      // 🟡 REACT - Buenas prácticas
      "react-hooks/rules-of-hooks": "error", // Reglas de hooks (CRÍTICO)
      "react-hooks/exhaustive-deps": "warn", // Dependencies de useEffect
      "react/jsx-uses-vars": "warn",         // Variables usadas en JSX
    },
    settings: {
      react: {
        version: "detect"                    // Detectar versión automáticamente
      }
    }
  }
]);