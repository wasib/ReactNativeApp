import React from "react";
import { StyleSheet, View } from "react-native";
import { Tabs, Tab } from "react-router-navigation";
import { Route, Switch, Redirect } from "react-router-native";
import ScreenOne from "../screens/ScreenOne";
import ScreenTwo from "../screens/ScreenTwo";
export default class TabNavigator extends React.Component {
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
            path="/app/tabs"
            render={({ match: { url } }) => <Redirect to={`${url}/one`} />}
          />
          <Route
            path="/app/tabs"
            render={({ match: { url } }) => (
              <Tabs
                labelStyle={{ color: "white" }}
                tabBarStyle={{ backgroundColor: "purple" }}
                tabBarIndicatorStyle={{ backgroundColor: "white" }}
              >
                <Tab
                  exact
                  path={`${url}/one`}
                  label="One"
                  component={ScreenOne}
                />
                <Tab
                  exact
                  path={`${url}/two`}
                  label="Two"
                  component={ScreenTwo}
                />
              </Tabs>
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
