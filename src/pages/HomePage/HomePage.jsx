import React, { Component } from "react";
import "./HomePage.css";
class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: "",
      title: "",
      imageUrl: "",
      description: "",
    };
  }

  async componentDidMount() {
    await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=i7MCH8gtmWiYEU2A3HHs9NAY2G2BgSGE52QPsnDY"
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          date: data.date,
          title: data.title,
          imageUrl: data.url,
          description: data.explanation,
        });
      });
  }
  render() {
    return (
      <div
        className="home-page"
        style={{
          background: this.state.imageUrl,
          backgroundImage: `url(${this.state.imageUrl})`,
        }}
      >
        <h2 className="welcome-msg">Welcome to NASA HomePage</h2>
        <h4>Date : {this.state.date}</h4>
        <h3>Astronomy Pic of the Day</h3>
        <h2 className="welcome-msg">Todays Title : {this.state.title}</h2>
        <span className="welcome-msg">
          Explanation: {this.state.description}
        </span>
      </div>
    );
  }
}

export default HomePage;
