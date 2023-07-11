import '@testing-library/jest-dom';

// MEMO: @storybook/testing-react で globalSetup している場合は不要
jest.mock('next/router', () => require('next-router-mock'));
jest.mock('next/dist/client/router', () => require('next-router-mock'));
// https://github.com/scottrippey/next-router-mock/issues/58
jest.mock('next/dist/shared/lib/router-context', () => {
  const { createContext } = require('react');
  const { memoryRouter } = require('next-router-mock');
  const RouterContext = createContext(memoryRouter);
  return { RouterContext };
});
