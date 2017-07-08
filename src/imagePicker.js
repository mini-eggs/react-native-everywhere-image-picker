import React from "react";
import { View } from "react-native";
import { ImagePicker } from "expo";

export default class extends React.Component {
  _pickImage = async () => {
    const settings = this.props.settings || {};
    try {
      const result = await ImagePicker.launchImageLibraryAsync(settings);
      this.props.onComplete(result);
    } catch (err) {
      const data = { cancelled: false, error: err };
      this.props.onFail(data);
    }
  };

  render() {
    return (
      <View style={this.props.style} onPress={this._pickImage}>
        {this.props.children}
      </View>
    );
  }
}
