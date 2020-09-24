/**
 * @format
 */

import 'react-native-gesture-handler';
import 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {Container} from '../../App';
import {View as RNView} from 'react-native';

import renderer from 'react-test-renderer';

import {Box} from 'components';
import {act, fireEvent, render} from 'react-native-testing-library';

describe('Box component test', () => {
  beforeEach(() => {
    Dimensions.addEventListener.mockClear();
  });

  it('renders correctly', async () => {
    const tree = await render(
      <Container>
        <Box>Many</Box>
      </Container>,
    ).toJSON();
    await expect(tree).toMatchSnapshot();
  });

  it('passes styles based on the given props', async () => {
    const {toJSON, UNSAFE_getAllByType, queryAllBy, ...root} = await render(
      <Container>
        <Box variant="none" opacity={0.5}>
          hey
        </Box>
      </Container>,
    );
    await expect(UNSAFE_getAllByType(Box)[0].props).toEqual(
      expect.objectContaining({opacity: 0.5}),
    );
  });
});
