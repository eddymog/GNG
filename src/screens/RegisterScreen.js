import React from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Content, Form, Item, Input, View, Picker, Icon, DatePicker, ListItem, Radio, Body, Left, CheckBox, Button } from 'native-base';
import CommonTouchableOpacity from './../components/CommonTouchableOpacity';

const RegisterScreen = (props) => {

  const [firstName, onChangeFirstName] = React.useState('Darth Vader');
  const [familyName, onChangeFamilyName] = React.useState('Skywalker');
  const [email, onChangeEmail] = React.useState('eddy@gng.com');
  const [country, onChangeCountry] = React.useState('Venezuela');
  const [DOB, onChangeDOB] = React.useState('04/21/1995');
  const [gender, onChangeGender] = React.useState('Female')
  const [agreement, onChangeAgreement] = React.useState(false);
  const { navigate } = props.navigation;

  return (
    <Container style={{padding: 30}}>
      <Content>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontFamily: 'sans-serif', color: '#002f3d', fontSize: 30, fontWeight: 'bold'}}>Seat at the table</Text>
        </View>
          <View style={{marginTop: 50}}>
            <Form>
              <Item style={{marginBottom: 20}} regular>
                <Input placeholder="First Name" onChangeText={text => onChangeFirstName(text)} value={firstName} />
              </Item>
              <Item style={{marginBottom: 20}} regular>
                <Input placeholder="Family Name" onChangeText={text => onChangeFamilyName(text)} value={familyName} />
              </Item>
              <Item style={{marginBottom: 20}} regular>
                <Input placeholder="Email" onChangeText={text => onChangeEmail(text)} value={email} />
              </Item>
              <Item style={{marginBottom: 20}} regular picker>
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  // style={{ width: undefined }}
                  placeholder="Select your SIM"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={country}
                  onValueChange={onChangeCountry}
                >
                  <Picker.Item label="United States" value="key0" />
                  <Picker.Item label="Canada" value="key1" />
                  <Picker.Item label="Mexico" value="key2" />
                  <Picker.Item label="Venezuela" value="key3" />
                  <Picker.Item label="France" value="key4" />
                </Picker>
              </Item>
              <Item regular>
                <DatePicker
                  defaultDate={new Date(1900, 4, 4)}
                  minimumDate={new Date(2019, 1, 15)}
                  maximumDate={new Date(2021, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Date of Birth"
                  textStyle={{ color: "green" }}
                  placeHolderTextStyle={{ color: "#d3d3d3" }}
                  onDateChange={onChangeDOB}
                  disabled={false} />
              </Item>
              <ListItem regular>
                <Left>
                  <Radio selected={gender === 'Female'} onPress={() => {
                    onChangeGender('Female')
                  }} />
                  <Text style={{fontFamily: 'sans-serif', marginLeft: 10 }}>Female</Text>
                </Left>
              </ListItem>
              <ListItem regular>
                <Left>
                  <Radio selected={gender === 'Male'} onPress={() => {
                    onChangeGender('Male')
                  }} />
                  <Text style={{fontFamily: 'sans-serif', marginLeft: 10 }}>Male</Text>
                </Left>
              </ListItem>
              <ListItem regular>
                <Left>
                  <Radio selected={gender === 'Non-binary'} onPress={() => {
                    onChangeGender('Non-binary')
                  }} />
                  <Text style={{fontFamily: 'sans-serif', marginLeft: 10 }}>Non-binary</Text>
                </Left>
              </ListItem>
              <ListItem>
                <CheckBox checked={agreement} onPress={() => {
                  onChangeAgreement(!agreement);
                }} />
                <Body style={{marginLeft: 10}}>
                  <Text style={{fontFamily: 'sans-serif' }}>By checking this box, you agree to our Terms of Use and Privacy Policy</Text>
                </Body>
              </ListItem>
            </Form>
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
              <Button success style={{padding: 15, textAlign: 'right'}}
                onPress={() => navigate('Profile', { name: 'Darth Vader' })}>
                <Text style={{ fontFamily: 'sans-serif', color: 'white' }}>Sign up</Text>
              </Button>
            </View>
          </View>
        </Content>
      </Container>
  );
};

export default RegisterScreen;