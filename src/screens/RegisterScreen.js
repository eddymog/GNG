import React from 'react';
import { Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import CommonTouchableOpacity from './../components/CommonTouchableOpacity';

const RegisterScreen = () => {

  const [firstName, onChangeFirstName] = React.useState('Eddy');
  const [familyName, onChangeFamilyName] = React.useState('Mogollon');
  const [email, onChangeEmail] = React.useState('eddy@gng.com');
  const [country, onChangeCountry] = React.useState('Venezuela');
  const [DOB, onChangeDOB] = React.useState('04/21/1995');
  

  return (
    <>
      <ScrollView>
        <Text>seat at the table</Text>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeFirstName(text)}
          value={firstName}
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeFamilyName(text)}
          value={familyName}
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeEmail(text)}
          value={email}
        />

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeCountry(text)}
          value={country}
        />

        <Text>Female</Text>
        <Text>Male</Text>
        <Text>Non-binary</Text>

        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeDOB(text)}
          value={DOB}
        />

        <Text>By checking this box, you agree to our Terms of Use and Privacy Policy</Text>

        <CommonTouchableOpacity onPress={() => {}} text={'Submit 1/3'} />

      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default RegisterScreen;