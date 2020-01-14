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
          <Col>
            <Row size={15} style={{justifyContent: 'center', alignItems: 'center', backgroundColor: 'yellow'}}>
              <Text style={{color: '#002f3d', fontSize: 25, fontWeight: 'bold'}}>Seat at the table...</Text>
            </Row>
            <Row size={55} style={{backgroundColor: 'blue'}}>
              <Text>2</Text>
            </Row>
            <Row size={30} style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <View>
                <Button style={{backgroundColor: '#1a538a', paddingRight: 20}}>
                  <Icon name='facebook-square' />
                  <Text style={{ color: 'white' }}>Facebook</Text>
                </Button>
              </View>
              <View>
                <Button style={{backgroundColor: 'white', paddingRight: 20}}>
                  <Icon style={{ color: '29303b' }} name='google' />
                  <Text style={{ color: '29303b' }}>Google</Text>
                </Button>
              </View>
              <View>
                <Button style={{paddingRight: 20}} bordered>
                  <Text style={{ color: '#686f7a' }}>Login</Text>
                </Button>
              </View>
              <View>
                <Button style={{backgroundColor: '#ec5252', paddingRight: 20}}>
                  <Text style={{ color: 'white' }}>Sign Up</Text>
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