import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class ScreenTwo extends React.Component {
  
  
  render() {
    return (
      <ScrollView style={styles.container}>
      <Text>{this.props.location.pathname}</Text>
        <Text> This is screen two</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
