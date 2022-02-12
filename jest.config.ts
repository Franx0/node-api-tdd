import type {Config} from '@jest/types';
import {defaults} from 'jest-config';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  moduleFileExtensions: [...defaults.moduleFileExtensions, "ts", "tsx"],
  moduleNameMapper: {
    "^@import/(.*)$": "<rootDir>/src/$1"
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: [
    "**/tests/**/*.spec.ts",
    "**/tests/**/*.test.ts",
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/"
  ],
};

export default async (): Promise<Config.InitialOptions> => {
  return {
    ...config,
    testEnvironment: "node",
  }
};
