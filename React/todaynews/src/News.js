import React from "react";
import PropTypes from "prop-types";
import "./News.css";

function News({ title, url, source, urlToImage, description }) {
  return (
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <th className="urlToIamge">
            <img
              src={urlToImage}
              border="0"
              width="100"
              height="100"
              alt="newsimages"
            />
          </th>
          <th className="title">
            <a href={url} target="_blank">
              [{title}]
            </a>
          </th>
          <th className="description">{description}</th>
        </tr>
      </tbody>
    </table>
  );
}

News.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default News;
