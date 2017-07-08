import React from "react";

const style = {
  container: {
    display: "flex",
    cursor: "pointer"
  },
  input: {
    border: 0,
    width: 0,
    height: 0,
    visibility: "hidden",
    display: "none"
  }
};

export default class extends React.Component {
  _handleUpload = event => {
    const file = event.target.files[0];

    if (!/^image\//.test(file.type)) {
      const data = { cancelled: false, error: "Not an image." };
      this.props.onFail(data);
      return;
    }

    const reader = new FileReader();

    reader.onload = event => {
      const image = new Image();
      image.src = event.target.result;
      image.onload = event => {
        const { width, height } = event.target;
        const uri = event.target.src;
        const data = { cancelled: false, uri, width, height };
        this.props.onComplete(data);
      };
    };

    reader.onerror = err => {
      const data = { cancelled: false, error: err };
      this.props.onFail(data);
    };

    reader.onabort = err => {
      const data = { cancelled: false, error: err };
      this.props.onFail(data);
    };

    reader.readAsDataURL(file);
  };

  render() {
    const containerStyle = Object.assign({}, style.container, this.props.style);
    return (
      <label onChange={this._handleUpload} style={containerStyle}>
        <input style={style.input} type="file" accept="image/*" />
        {this.props.children}
      </label>
    );
  }
}
