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
import TabNavigator from "./TabNavigator";

export default class AppNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Switch location={this.props.location}>
          <Route
            exact
            path="/app"
            render={({ match: { url } }) => <Redirect to={`${url}/home`} />}
          />
          <Route
            path="/app"
            render={({ match: { url } }) => (
              <BottomNavigation lazy={false}>
                <Tab
                  exact
                  path={`${url}/home`}
                  label="Home"
                  renderTabIcon={({ focused }) => (
                    <TabBarIcon
                      focused={focused}
                      name={
                        Platform.OS === "ios"
                          ? `ios-information-circle${focused ? "" : "-outline"}`
                          : "md-information-circle"
                      }
                    />
                  )}
                  component={HomeScreen}
                />
                <Tab
                  exact
                  path={`${url}/links`}
                  label="Links"
                  renderTabIcon={({ focused }) => (
                    <TabBarIcon
                      focused={focused}
                      name={Platform.OS === "ios" ? "ios-link" : "md-link"}
                    />
                  )}
                  component={LinksScreen}
                />
                <Tab
                  path={`${url}/tabs`}
                  label="Tabs"
                  renderTabIcon={({ focused }) => (
                    <TabBarIcon
                      focused={focused}
                      name={Platform.OS === "ios" ? "ios-apps" : "md-apps"}
                    />
                  )}
                  component={TabNavigator}
                />
                <Tab
                  exact
                  path={`${url}/settings`}
                  label="Settings"
                  renderTabIcon={({ focused }) => (
                    <TabBarIcon
                      focused={focused}
                      name={
                        Platform.OS === "ios" ? "ios-options" : "md-options"
                      }
                    />
                  )}
                  component={SettingsScreen}
                />
              </BottomNavigation>
            )}
          />
        </Switch>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    padding: 0,
    flex: 1
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
