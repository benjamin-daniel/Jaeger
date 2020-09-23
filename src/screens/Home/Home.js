import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {Box, Text} from 'components';

export const Home = () => {
  return (
    <Box flex={1}>
      <ScrollView contentContainerStyle={styles.container}>
        <Box>
          <Text fontSize={20}>Welcome Daniel</Text>
        </Box>
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
