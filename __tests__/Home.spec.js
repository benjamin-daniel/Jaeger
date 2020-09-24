import 'react-native';
import React from 'react';
import {fireEvent, render, act, waitFor} from 'react-native-testing-library';
import App from '../App';

// import {expect, it, jest} from '@jest/globals';
//mocking async storage module
// const mockedSetItem = jest.fn();
// jest.mock('@react-native-community/async-storage', () => ({
//   setItem: mockedSetItem,
// }));

beforeAll(() => {
  // we're using fake timers because we don't want to
  // wait a full second for this test to run.
  jest.useFakeTimers();
});

afterAll(() => {
  jest.useRealTimers();
});

it('renders/navigates throughout app screens', async () => {
  let tree;
  act(() => render(<App />));
  console.log({tree});
  //   console.log({getByText});
  //   const homeText = getByText(/Become a Jaeger/i);
  //   expect(homeText).not.toBeNull();
  //   fireEvent.press(getByText(/Become a Jaeger/i));

  //   await waitFor(() => {
  //     const counterText = getByText(/Current count:/i);
  //     expect(counterText.props.children).toEqual(['Current count: ', 0]);
  //   });
});
