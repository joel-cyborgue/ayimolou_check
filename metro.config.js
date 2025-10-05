const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Config pour transformer les SVG en composants React
config.transformer = {
  babelTransformerPath: require.resolve("react-native-svg-transformer"),
};

// Config du resolver pour accepter les fichiers SVG
config.resolver = {
  ...config.resolver,
  assetExts: config.resolver.assetExts.filter(ext => ext !== "svg"),
  sourceExts: [...config.resolver.sourceExts, "svg"],
};

// On applique NativeWind
module.exports = withNativeWind(config, { input: "./app/globals.css" });
