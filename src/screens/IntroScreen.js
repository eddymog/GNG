import React from 'react';
import Swiper from 'react-native-swiper';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';
const styles = StyleSheet.create({
  wrapper: {
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#538dca',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text1: {
    color: '#002f3d',
    fontSize: 25,
    textAlign: 'center',
    padding: 50,
  },
  text2: {
    color: '#ecf5ff',
    fontSize: 25,
    textAlign: 'center',
    padding: 50,
  },
  activeDot: {
    backgroundColor: '#333', width: 16, height: 16, borderColor: '#002f3d', borderRadius: 20, marginLeft: 7, marginRight: 7,  marginTop: 50
  },
  dot: {
    backgroundColor: 'rgba(51,51,51,.3)', width: 16, height: 16, borderRadius: 20, marginTop: 50, marginLeft: 7, marginRight: 7
  } 
})

export default class IntroScreen extends React.Component {
  
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Swiper style={styles.wrapper} 
        showsButtons={false} 
        dot={<View style={styles.dot} />}
        activeDot={<View style={styles.activeDot} />}
        loop={false}>
        <View style={styles.slide1}>
          <View style={{flex: 1}}>
            <Text style={{marginTop: 60, color: '#002f3d', fontSize: 25, fontWeight: 'bold'}}>We believe that...</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}><Text style={styles.text1}>Curiosity allows you to experience the world in new and unexpected ways</Text></View>
          <View style={{flex: 1}}></View>
        </View>
        <View style={styles.slide1}>
          <View style={{flex: 1}}>
            <Text style={{marginTop: 60, color: '#002f3d', fontSize: 25, fontWeight: 'bold'}}>We believe that...</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}><Text style={styles.text1}>Communicating respectfully with others helps make sense of our crazy world</Text></View>
          <View style={{flex: 1}}></View>
        </View>
        <View style={styles.slide1}>
          <View style={{flex: 1}}>
            <Text style={{marginTop: 60, color: '#002f3d', fontSize: 25, fontWeight: 'bold'}}>We believe that...</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}><Text style={styles.text1}>Connecting authentically with others allows us to make the world better</Text></View>
          <View style={{flex: 1}}></View>
        </View>
        <View style={styles.slide1}>
          <View style={{flex: 1}}>
            <Text style={{marginTop: 60, color: '#002f3d', fontSize: 25, fontWeight: 'bold'}}>Do you believe?</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}><Text style={styles.text1}>Yes, I believe in my power/potential and the power/potential of others in the world.</Text></View>
          <View style={{flex: 1, padding: 50}}>
            <Button style={{padding: 15, color: '#333'}} large full success
              onPress={() => navigate('Login')}>
              <Text style={{ color: 'white' }}>Yes Yes Yes I'm in</Text>
            </Button>
          </View>
        </View>
      </Swiper>
    );
  }
}