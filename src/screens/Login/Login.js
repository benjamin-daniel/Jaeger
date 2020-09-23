import React from 'react';
import {ScrollView, Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useFormik} from 'formik';
import * as Yup from 'yup';

import {Box, Text, Input, Button} from 'components';
import Crew from 'assets/img/Crew.png';
import Layout from 'constants/layout';


const {width: wWidth} = Layout.window;

const verifyLoginSchema = Yup.object({
  mail: Yup.string()
    .trim()
    .email('Invalid Email')
    .required('Boss man this is required!'),
});

export const Login = () => {
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
    },
    onSubmit: async (values) => {
      console.log({values});
    },
    validationSchema: verifyLoginSchema,
  });

  return (
    <Box flex={1} paddingHorizontal="m">
      <SafeAreaView style={styles.SafeAreaView}>
        <ScrollView>
          <Box alignItems="center" marginVertical="xl">
            <Image source={Crew} style={styles.image} />
            <Box>
              <Text fontSize={20} textAlign="center">
                Login to use Jaeger app
              </Text>
            </Box>
          </Box>

          <Box>
            <Input
              placeholder="Email Address"
              keyboardType="email-address"
              onChangeText={handleChange('mail')}
              onBlur={handleBlur('mail')}
              value={values.mail}
              touched={touched.mail}
              error={errors.mail}
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
                text="Sign In"
              />
            </Box>
          </Box>
        </ScrollView>
      </SafeAreaView>
    </Box>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  image: {
    // width: wWidth,
  },
});
