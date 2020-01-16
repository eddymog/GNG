import React from 'react';
import { Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Content, Form, Item, Input, View, Picker, Icon, DatePicker, ListItem, Radio, Body, Left, CheckBox, Button } from 'native-base';

const RegisterScreen = (props) => {

  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const { navigate } = props.navigation;

  return (
    <Container style={{ padding: 30 }}>
      <Content>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontFamily: 'sans-serif', color: '#002f3d', fontSize: 30, fontWeight: 'bold' }}>Seat at the table</Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <Form>
            <Item style={{ marginBottom: 20 }} regular>
              <Input placeholder="Email" onChangeText={text => onChangeEmail(text)} value={email} />
            </Item>
            <Item style={{ marginBottom: 20 }} regular>
              <Input secureTextEntry placeholder="Password" onChangeText={text => onChangePassword(text)} value={password} />
            </Item>
          </Form>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
          <Button info style={{ padding: 15, textAlign: 'right' }}
            onPress={() => navigate('Profile', { name: 'Darth Vader' })}>
            <Text style={{ fontFamily: 'sans-serif', color: 'white' }}>Log In</Text>
          </Button>
        </View>
      </Content>
    </Container>
  );
};

export default RegisterScreen;