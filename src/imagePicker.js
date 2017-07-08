import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { ImagePicker } from "expo";

function pickImage(settings, onComplete, onFail) {
  return async () => {
    const settings = settings || {};
    try {
      const result = await ImagePicker.launchImageLibraryAsync(settings);
      onComplete(result);
    } catch (err) {
      const data = { cancelled: false, error: err };
      onFail(data);
    }
  };
}

export default function({ style, children, settings, onComplete, onFail }) {
  return (
    <TouchableWithoutFeedback
      style={style}
      onPress={pickImage(settings, onComplete, onFail)}
    >
      <View>
        {children}
      </View>
    </TouchableWithoutFeedback>
  );
}
