import React from 'react';
import { Container, Thumbnail, View, Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Text } from 'react-native';

class ProfileScreen extends React.Component {

  render() {
    const uri = "https://blenderartists.org/uploads/default/original/4X/b/9/c/b9c874ce7cadfd60d7d53802594744e15df04d08.jpg";
    const { navigate } = this.props.navigation;
    const username = this.props.navigation.getParam('name');

    return (
      
      <Container>
        <Grid>
          <Col style={{backgroundColor: 'white'}}>
            <Row onPress={() => navigate('Login')} size={50} style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
              <Text style={{color: '#002f3d', fontSize: 30, fontWeight: 'bold'}}>Hi, {username || 'John Doe'}!</Text>
              <Thumbnail style={{marginTop: 45, borderRadius: 7, height: 150, width: 150}} square large source={{uri: uri}} />
            </Row>
            <Row size={50} style={{justifyContent: 'center', alignItems: 'center'}}>

            </Row>
          </Col>
        </Grid>
      </Container>
    );
  }
}

export default ProfileScreen;