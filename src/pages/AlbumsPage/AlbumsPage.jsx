import React, { Component } from "react";
import Album from "../../components/CustomButton/Album/Album";
import "./AlbumsPage.css";
class AlbumsPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albumsData: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ albumsData: data });
      });
  }

  render() {
    return (
      <div className="albums-page">
        <h1>Albums Page</h1>
        <div className="albums-grid">
          {" "}
          {this.state.albumsData.map((album) => (
            <Album key={album.id} id={album.id} title={album.title} />
          ))}
        </div>
      </div>
    );
  }
}

export default AlbumsPage;
