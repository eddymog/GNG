import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

class IntroScreen extends React.Component {
  render() {
    return (
      <ScrollView>
        <Text>we believe that... // Do you believe?</Text>
        <Text>Curiosity allows you to experience the world in new and unexpected ways</Text>
        <Text>Communicating respectfully with others helps make sense of our crazy world</Text>
        <Text>Connecting authentically with others allows us to make the world better</Text>
        <Text>Yes, I believe in my power/potential and the power/potential of others in the world.</Text>
      </ScrollView>
    );
  }
}

export default IntroScreen;
