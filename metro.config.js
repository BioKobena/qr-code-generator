// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

config.resolver.assetExts.push(
    // Adds support for `.db` `.bin` files for SQLite databases (code récupérer depuis https://docs.expo.dev/guides/customizing-metro/)
    '.bin',
    '.db'
  );
module.exports = config;
