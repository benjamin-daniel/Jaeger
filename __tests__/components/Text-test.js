/**
 * @format
 */

import 'react-native-gesture-handler';
import 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {Container} from '../../App';

import {Text} from 'components';
import renderer from 'react-test-renderer';

jest.mock('react-native/Libraries/Utilities/Dimensions', () => {
  return {
    get: () => ({
      width: 375,
      height: 667,
    }),
    addEventListener: jest.fn(),
  };
});

describe('Text component test', () => {
  beforeEach(() => {
    Dimensions.addEventListener.mockClear();
  });

  it('renders correctly', async () => {
    const tree = await renderer
      .create(
        <Container>
          <Text>Many</Text>
        </Container>,
      )
      .toJSON();
    await expect(tree).toMatchSnapshot();
  });

  it('passes styles based on the given props', async () => {
    const {root} = renderer.create(
      <Container>
        <Text variant="none" opacity={0.5}>
          hey
        </Text>
      </Container>,
    );
    await expect(root.findByType(Text).props).toEqual(
      expect.objectContaining({opacity: 0.5}),
    );
  });
});
