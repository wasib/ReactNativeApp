import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  AppRegistry,
  Platform
} from "react-native";
import {
  Navigation,
  Card,
  Tabs,
  Tab,
  BottomNavigation
} from "react-router-navigation";
import {
  NativeRouter,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-native";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TabBarIcon from "../components/TabBarIcon";
import DemoScreen from '../screens/DemoScreen';
import AppNavigator from "./AppNavigator";

export default class RootNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          <Switch>
            <Route
              exact
              path="/"
              render={({ match: { url } }) => <Redirect to={`/app`} />}
            />
            <Navigation hideNavBar>
              <Card path="/app" component={AppNavigator} />
              <Card path="/demo" component={DemoScreen} />
            </Navigation>
          </Switch>
        </View>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 2,
    flex: 1
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
