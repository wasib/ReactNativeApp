import React from "react";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import { ExpoLinksView } from "@expo/samples";
import axios from "axios";

export default class ScreenTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFromSearch:
        props.isFromSearch == undefined ? false : props.isFromSearch,
      stories: [],
      displayStories: [],
      skip: 0,
      limit: 15
    };
    this.loadContent = this.loadContent.bind(this);
    this.fillStories = this.fillStories.bind(this);
  }

  loadContent() {
    var genres = JSON.stringify(this.props.selectedGenres);
    var regions = JSON.stringify(this.props.selectedRegions);
    var userid = this.props.userid;
    var url, data;
    // console.log(genres); console.log(userid);
    if (userid) {
      url = "https://server.ornews.in/api/story/getnewstories";
      data = {
        genres: genres,
        user_id: userid
      };
    } else {
      if (this.state.isFromSearch)
        url = "https://server.ornews.in/api/story/getnewstories";
      else url = "https://server.ornews.in/api/story/getnewstories";

      data = {
        genres: this.state.isFromSearch
          ? JSON.stringify(this.props.selectedGenresFromSearch)
          : genres,
        regions: this.state.isFromSearch
          ? JSON.stringify(this.props.selectedRegionsFromSearch)
          : regions,
        skip: this.state.skip,
        limit: this.state.limit
      };
    }
    // console.log(url); console.log(data);
    axios
      .post(url, data)
      .then(response => {
        const data = response.data.data;
        // console.log(response) console.log("Success");
        this.setState(
          {
            stories: [...this.state.stories, ...data],
            skip: this.state.skip + this.state.limit
          },
          () => this.fillStories()
        );
      })
      .catch(function(error) {
        console.log("Failure");
        console.log(error);
      });
  }

  fillStories() {
    const children = [];
    if (this.state.stories != undefined)
      this.state.stories.forEach(story => {
        children.push(
          <View key={story._id} style={styles.storyContainer}>
            {story.story_image ? (
              <View>
                <Image source={{uri:story.story_image}} style={styles.Image}/>
              </View>
            ) : null}
            <Text style={styles.storyTitle}>{story.title}</Text>
          </View>
        );
      });

    if (children.length == 0) {
      children.push(
        <View className="empty-state-home-content">
          <View>Hmm. We dont seem to have any stories here.</View>
        </View>
      );
    }

    this.setState({ displayStories: children });
  }

  componentDidMount() {
    this.loadContent();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        {this.state.displayStories}
      </ScrollView>
    );
  }
}

ScreenTwo.defaultProps = {
  selectedGenres: ["All"],
  selectedRegions: ["All"]
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  },
  storyContainer: {
    flexDirection:"row",
    padding: 5
  },
  storyText: {
    fontSize: 10
  },
  Image:{
      width:100,
      height:100
  }
});
