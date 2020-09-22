import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Input, Text, Button} from 'components';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native';

const Main = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
      <SafeAreaView>
        <Input />
        <Text>Omo</Text>
        <Button text="hey" />
        <Feather size={20} name="eye" />
        <Text>hsesdsdy</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default Main;
