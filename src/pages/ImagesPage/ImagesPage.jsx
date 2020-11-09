import React, { useState, useEffect } from "react";
import "./ImagesPage.css";
import Unsplash, { toJson } from "unsplash-js";

function ImagesPage() {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);

  useEffect(() => {
    unsplash.search
      .photos("random")
      .then(toJson)
      .then((json) => setPics(json.results));
  }, []);

  const unsplash = new Unsplash({
    accessKey: "pTvlh5gQUirgKOetahKCp4JvKtBVKM7SwPEGb0YKbCI",
  });
  const searchPhotos = async (e) => {
    e.preventDefault();
    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        setPics(json.results);
      });
  };
  return (
    <div className="images-page">
      {" "}
      <>
        <form className="form" onSubmit={searchPhotos}>
          <input
            type="text"
            name="query"
            className="input"
            placeholder={`Search for images `}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit" className="button">
            Search
          </button>
        </form>
        <div className="card-list">
          {" "}
          {pics.map((pic) => (
            <div className="card" key={pic.id}>
              <img
                className="card--image"
                alt={pic.alt_description}
                src={pic.urls.full}
                width="50%"
                height="50%"
              ></img>
            </div>
          ))}
        </div>
      </>
    </div>
  );
}

export default ImagesPage;
