/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest", // Transforms TypeScript files
    "^.+\\.jsx?$": "babel-jest", // Optional: Use babel-jest if you need to transform JS files too
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  transformIgnorePatterns: ["<rootDir>/node_modules/"], // Ignore transforming files from node_modules
};
