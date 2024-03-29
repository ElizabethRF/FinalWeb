import React, { Component } from "react";
import { Storage } from "aws-amplify";
import { Button } from "@material-ui/core";
import { firebase } from "@firebase/app";
class GetImage extends Component {
  constructor(props) {
    super(props);
    this.get = this.get.bind(this);
    this.state = {
      url: "https://dummyimage.com/400x300"
    };
  }
  get() {
    const getTask = firebase
      .storage()
      .ref()
      .child("WaterCityGabriel.png")
      .getDownloadURL()
      .then(url => {
        this.setState({ url });
        console.log(this.state.url);
      });
  }
  render() {
    return (
      <div>
        <Button onClick={this.get}>Get Image</Button>
        <img
          src={this.state.url}
          alt="Stored Image"
          height="300"
          width="400"
        ></img>
      </div>
    );
  }
}

export default GetImage;
