/**
 * @format
 */

import 'react-native-gesture-handler';
import 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';
import {Container} from '../../App';
import {Text as RNText} from 'react-native';
import {palette} from 'constants/theme';

import {ErrorText} from 'components';
import renderer from 'react-test-renderer';

describe('ErrorText component test', () => {
  it('renders correctly', async () => {
    const tree = await renderer
      .create(
        <Container>
          <ErrorText>Many</ErrorText>
        </Container>,
      )
      .toJSON();
    await expect(tree).toMatchSnapshot();
  });

  it('passes default style', async () => {
    const {root} = renderer.create(
      <Container>
        <ErrorText error="hey" touched />
      </Container>,
    );
    await expect(root.findByType(RNText).props.style).toEqual([
      {color: palette.error, fontSize: 12, display: 'flex'},
    ]);
  });
  it("returns null when error condition doesn't match", async () => {
    const tree = renderer
      .create(
        <Container>
          <ErrorText />
        </Container>,
      )
      .toJSON();
    await expect(tree).toEqual(null);
  });
});
