import React from "react";
import "./Album.css";
import { withRouter } from "react-router";
const Album = ({ id, title, history }) => {
  return (
    <div
      className="individual-album"
      onClick={() => {
        history.push(`/albums/${id}`);
      }}
    >
      <h3 className="album-title">{title}</h3>
      <h3 className="album-cts">Click to See</h3>
    </div>
  );
};

export default withRouter(Album);
