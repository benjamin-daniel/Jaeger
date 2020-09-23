import React from 'react';
import {ScrollView, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {Box, Text, Input, Button} from 'components';
import Crew from 'assets/img/Crew.png';
import phone from 'phone';
import Layout from 'constants/layout';

const {width: wWidth} = Layout.window;

Yup.addMethod(Yup.string, 'validatePhone', function () {
  return this.test({
    name: 'phone',
    message: 'Phone is not valid',
    test: (postcode = '') => {
      // let prefix = '+234';
      // const value = prefix + postcode;
      let values = phone(postcode, 'NG');
      return values.length == 2;
    },
  });
});

const verifyRegisterSchema = Yup.object({
  name: Yup.string()
    .required('Required')
    .min(6, 'Name is too short')
    .max(30, 'Name is too long'),
  email: Yup.string()
    .trim()
    .email('Invalid Email')
    .required('Boss man this is required!'),
  mobile: Yup.string().required('Required').validatePhone(),
  password: Yup.string().required('Required').min(8, 'Minimun length of 8'),
});

export const Register = ({navigation}) => {
  const login = () => {
    navigation.navigate('Login');
  };
  const {
    errors,
    values,
    handleBlur,
    handleChange,
    touched,
    handleSubmit,
    isSubmitting,
    resetForm,
  } = useFormik({
    initialValues: {
      email: '',
      password: '',
      name: '',
      mobile: '',
    },
    onSubmit: async (values) => {
      console.log({values});
    },
    validationSchema: verifyRegisterSchema,
  });

  return (
    <Box flex={1}>
      <SafeAreaView style={styles.SafeAreaView}>
        <ScrollView contentContainerStyle={styles.container}>
          <Box alignItems="center" marginVertical="xl">
            <Image source={Crew} style={styles.image} />
            <Box>
              <Text fontSize={20} textAlign="center">
                Register to become a Jaeger
              </Text>
            </Box>
          </Box>

          <Box>
            <Input
              placeholder="Email Address"
              keyboardType="email-address"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              touched={touched.email}
              error={errors.email}
            />
            <Input
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              touched={touched.name}
              error={errors.name}
              placeholder="Name"
            />
            <Input
              onChangeText={handleChange('mobile')}
              onBlur={handleBlur('mobile')}
              value={values.mobile}
              touched={touched.mobile}
              error={errors.mobile}
              keyboardType="phone-pad"
              placeholder="Phone Number"
            />
            <Input
              // ref={secondTextInput}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              touched={touched.password}
              error={errors.password}
              placeholder="Password"
              Icon
              onSubmitEditing={handleSubmit}
            />

            <Box marginVertical="xl">
              <Button
                onPress={handleSubmit}
                loading={isSubmitting}
                disabled={isSubmitting}
                text="Register"
              />
            </Box>
            <Box alignItems="center" marginVertical="xl">
              <TouchableOpacity onPress={() => login()}>
                <Text>Have an account?</Text>
              </TouchableOpacity>
            </Box>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  SafeAreaView: {
    flex: 1,
  },
  image: {
    // width: wWidth,
  },
});
