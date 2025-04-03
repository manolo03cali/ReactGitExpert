module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  setupFiles: ["./jest.setup.js"],
};
// module.exports = {
//   testEnvironment: "jest-environment-jsdom",
//   setupFiles: ["./jest.setup.js"],
//   transform: {
//     "^.+\\.jsx?$": "babel-jest",
//   },
//   moduleFileExtensions: ["js", "jsx", "json", "node"],
// };

// export default {
//   //TODO: jsdom,
//   testEnvironment: "jest-environment-jsdom",
//   moduleNameMapper: {
//     "^.+\\.svg$": "jest-svg-transformer",
//     "^.+\\.(css|less|scss)$": "identity-obj-proxy",
//     "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
//       "<rootDir>/__mocks__/fileMock.cjs",
//   },
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
// };
// export default {
//   testEnvironment: "jsdom", // Para pruebas en React
//   moduleNameMapper: {
//     "^(\\.{1,2}/.*)\\.js$": "$1", // Soporta imports sin extensión .js
//   },
// };
