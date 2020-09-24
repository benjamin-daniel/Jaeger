import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity} from 'react-native';

import {Box, Text, Button} from 'components';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {store} from 'navigation/authContent';

const Operation = ({text, Icon}) => {
  return (
    <TouchableOpacity>
      <Box alignItems="center" justifyContent="space-between">
        <Box backgroundColor="dirtyRed" padding="l" borderRadius={10}>
          {Icon}
        </Box>
        <Text marginVertical="xs">{text}</Text>
      </Box>
    </TouchableOpacity>
  );
};

Operation.defaultProps = {
  Icon: <AntDesign name="home" size={24} color="black" />,
};

export const Home = () => {
  const {dispatch} = React.useContext(store);

  const logout = () => dispatch({type: 'SIGN_OUT'});
  return (
    <Box flex={1}>
      <ScrollView contentContainerStyle={styles.container}>
        <Box justifyContent="space-between" flexDirection="row">
          <Box>
            <Text fontSize={20}>Welcome Daniel</Text>
            <Text fontSize={14}>Vibes and Inshallah</Text>
          </Box>

          <Box>
            <Text>Account Balance</Text>
            <Text textAlign="right">0.00</Text>
          </Box>
        </Box>
        <Box marginTop="xl">
          <Text>Popular operations</Text>
          <Box
            flexDirection="row"
            justifyContent="space-between"
            marginVertical="l">
            <Operation text="All" />
            <Operation
              text="Health"
              Icon={<AntDesign name="heart" size={24} color="black" />}
            />
            <Operation
              text="Travel"
              Icon={<Feather name="flag" size={24} color="black" />}
            />
            <Operation
              text="Food"
              Icon={<Feather name="coffee" size={24} color="black" />}
            />
          </Box>
        </Box>
        <Box marginTop="xl">
          <Button onPress={logout} text="logout" />
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
