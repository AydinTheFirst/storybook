import type { Preview } from "@storybook/react";
import "../src/index.css"; // replace with the name of your tailwind css file
import { withThemeByClassName } from "@storybook/addon-themes";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        { name: "light", value: "rgb(241 245 249)" },
        { name: "dark", value: "rgb(17 24 39)" },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators = [
  withThemeByClassName({
    themes: {
      light: "light",
      dark: "dark",
    },
    defaultTheme: "dark",
  }),
];
