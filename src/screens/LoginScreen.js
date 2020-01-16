import React from 'react';
import { Container, Button, View, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text } from 'react-native';

class LoginScreen extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      
      <Container>
        <Grid>
          <Col style={{backgroundColor: '#4371a3'}}>
            <Row size={15} style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>Seat at the table</Text>
            </Row>

            <Row size={85} style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <View>
                <Button style={{marginBottom: 5, width: 130, backgroundColor: '#1a538a', paddingRight: 20}}>
                  <Icon type="FontAwesome" name='facebook-square' />
                  <Text style={{ color: 'white' }}>Facebook</Text>
                </Button>
              </View>
              <View>
                <Button style={{marginBottom: 5, width: 130, backgroundColor: '#4285f4', paddingRight: 30}}>
                  <Icon style={{ color: 'white' }} type="FontAwesome" name='google' />
                  <Text style={{ color: 'white' }}>Google</Text>
                </Button>
              </View>
              <View>
                <Button style={{marginBottom: 5, backgroundColor: 'white', width: 130, paddingRight: 30}}
                  onPress={() => navigate('LoginIn')}>
                  <Icon style={{ color: '#686f7a' }} type="FontAwesome" name='sign-in' />
                  <Text style={{ color: '#686f7a' }}>Log in</Text>
                </Button>
              </View>
              <View>
                <Button style={{marginBottom: 5, width: 130, backgroundColor: '#ec5252', paddingRight: 30}}
                  onPress={() => navigate('Register')}>
                  <Icon style={{ color: 'white' }} type="FontAwesome" name='sign-out' />
                  <Text style={{ color: 'white' }}>Sign up</Text>
                </Button>
              </View>
            </Row>
          </Col>
        </Grid>
      </Container>
      // <ScrollView>
      //   <Text>seat at the table</Text>
      //   <CommonTouchableOpacity onPress={() => {}} text={'Facebook'} />
      //   <CommonTouchableOpacity onPress={() => {}} text={'Google'} />
      //   <CommonTouchableOpacity onPress={() => {}} text={'Login'} />
      // </ScrollView>
    );
  }
}

export default LoginScreen;