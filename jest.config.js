module.exports = {
  preset: "ts-jest",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(jpg|ico|jpeg|png|gif|webp)$": "<rootDir>/src/assets/images/index.ts",
  },
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  globals: {
    fetch: global.fetch,
  },
};
