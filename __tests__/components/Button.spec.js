/**
 * @format
 */

import 'react-native-gesture-handler';
import 'react-native';
import React from 'react';
import {Container} from '../../App';
import {palette} from 'constants/theme';
import {fireEvent, render} from 'react-native-testing-library';

import {Button} from 'components';
import renderer, {act} from 'react-test-renderer';
import {
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native-gesture-handler';

describe('Button component test', () => {
  it('render correctly', async () => {
    await act(async () =>
      renderer.create(
        <Container>
          <Button />
        </Container>,
      ),
    );
  });
  it('match snapshot', async () => {
    const tree = renderer
      .create(
        <Container>
          <Button text="wahala" />
        </Container>,
      )
      .toJSON();
    await expect(tree).toMatchSnapshot();
  });

  it('shows loader when loading', async () => {
    const {root} = renderer.create(
      <Container>
        <Button loading text="wahala" />
      </Container>,
    );
    const loading = root.findByType(View);

    console.log({loading});
  });
});
