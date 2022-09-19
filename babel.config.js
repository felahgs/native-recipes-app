module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      require.resolve("babel-plugin-module-resolver"),
      {
        root: "./",
        cwd: "babelrc",
        extensions: [
          ".ts",
          ".tsx",
          ".js",
          ".ios.js",
          ".ios.tsx",
          ".android.js",
          ".android.tsx",
        ],
        alias: {
          screens: "./src/screens",
          components: "./src/components",
          constants: "./src/constants",
          services: "./src/services",
          models: "./src/models",
          mocks: "./src/mocks",
          hooks: "./src/hooks",
          utils: "./src/utils",
          routes: "./src/routes",
          theme: "./src/theme",
        },
      },
    ],
    "jest-hoist",
  ],
};
