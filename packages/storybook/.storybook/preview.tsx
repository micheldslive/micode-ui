import React, { useEffect, useState } from "react";
import { StoryContext, StoryFn, type Preview } from "@storybook/react";
import { Theme } from "@micode-ui/react";

const withThemeProvider = (Story: StoryFn, context: StoryContext) => {
  const { theme } = context.globals;
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setIsDark(() => theme === "dark");
  }, [theme]);

  return (
    <Theme theme={isDark}>
      <Story />
    </Theme>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "transparent",
      values: [
        {
          name: "transparent",
          value: "transparent",
        },
      ],
    },
  },
  decorators: [withThemeProvider],
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme for components",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: [
        { value: "light", icon: "sun", title: "Light" },
        { value: "dark", icon: "moon", title: "Dark" },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

export default preview;
