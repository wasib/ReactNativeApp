import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import {Link} from 'react-router-native'

export default class ScreenOne extends React.Component {
  
  
  render() {
    return (
      <ScrollView style={styles.container}>
      <Text>{this.props.location.pathname}</Text>
        <Text> This is screen one</Text>
        <Link to="/demo"><Text>DemoScreen</Text></Link>
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
