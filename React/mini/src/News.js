import React from "react";
import PropTypes from "prop-types";
import "./News.css";

function News({ title, url, source }) {
  return (
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <th className="title">{title}</th>
          <th className="url">
            기사 원문 URL:
            <a href={url} target="_blank">
              {url}
            </a>
          </th>
        </tr>
      </tbody>
    </table>
  );
}

News.propTypes = {
  author: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default News;
