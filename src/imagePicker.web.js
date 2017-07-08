import React from "react";

const styles = {
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

function handleUpload(onComplete, onFail) {
  return event => {
    const file = event.target.files[0];

    if (!/^image\//.test(file.type)) {
      const data = { cancelled: false, error: "Not an image." };
      onFail(data);
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
        onComplete(data);
      };
    };

    reader.onerror = err => {
      const data = { cancelled: false, error: err };
      onFail(data);
    };

    reader.onabort = err => {
      const data = { cancelled: false, error: err };
      onFail(data);
    };

    reader.readAsDataURL(file);
  };
}

export default function({ style, onComplete, onFail, children }) {
  const containerStyle = { ...styles.container, ...style };

  return (
    <label onChange={handleUpload(onComplete, onFail)} style={containerStyle}>
      <input style={styles.input} type="file" accept="image/*" />
      {children}
    </label>
  );
}
