import React from "react";
import { Text, Image, View, Platform, AppRegistry } from "react-native";
import ImagePicker from "react-native-everywhere-image-picker";

const style = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 25
  }
};

export default class Example extends React.Component {
  state = { uri: null };

  _handleImage = ({ uri }) => {
    this.setState(() => ({ uri }));
  };

  _handleFail = ({ error }) => {
    console.log(error);
  };

  render() {
    return (
      <View style={style.container}>
        <ImagePicker onComplete={this._handleImage} onFail={this._handleFail}>
          <Text>Pick an image from camera roll</Text>
        </ImagePicker>
        {this.state.uri &&
          <Image source={{ uri: this.state.uri }} style={style.image} />}
      </View>
    );
  }
}

if (Platform.OS === "web") {
  AppRegistry.registerComponent("Example", () => Example);
  AppRegistry.runApplication("Example", {
    rootTag: document.getElementById("root")
  });
}
