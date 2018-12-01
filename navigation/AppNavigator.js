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
import { NativeRouter, Route, Link } from "react-router-native";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TabBarIcon from "../components/TabBarIcon";
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <NativeRouter>
        <View style={styles.container}>
          {/* <Text>Hello</Text> */}
          {/* <Navigation
          hideNavBar
          navBarStyle={{ backgroundColor: "purple" }}
          titleStyle={{ color: "white" }}
        >
          <Card exact path="/" component={HomeScreen} />
          <Card exact path="/links" component={LinksScreen} />
          <Card exact path="/settings" component={SettingsScreen} />
        </Navigation> */}

          {/* <Tabs
            scrollEnabled
            labelStyle={{ color: "white" }}
            tabBarStyle={{ backgroundColor: "purple" }}
            tabBarIndicatorStyle={{ backgroundColor: "white" }}
          >
            <Tab exact path="/" label="Home" component={HomeScreen} />
            <Tab exact path="/links" label="Links" component={LinksScreen} />
            <Tab
              exact
              path="/settings"
              label="Settings"
              component={SettingsScreen}
            />
          </Tabs> */}

          <BottomNavigation lazy={true}>
            <Tab
              exact
              path="/"
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
              exact path="/links"
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
              exact
              path="/settings"
              label="Settings"
              renderTabIcon={({ focused }) => (
                <TabBarIcon
                  focused={focused}
                  name={Platform.OS === "ios" ? "ios-options" : "md-options"}
                />
              )}
              component={SettingsScreen}
            />
          </BottomNavigation>
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
