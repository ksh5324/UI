module.exports = {
  stories: ["../src/components/**/*.stories.js"],
  refs: {
    "design-system": {
      title: "My design system",
      //👇 The url provided by Chromatic when it was deployed
      url: "https://www.chromatic.com/apps?accountId=62efeca7d7a33abd903ac012",
    },
  },
  staticDirs: ["../public"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  features: {
    interactionsDebugger: true,
  },
};
