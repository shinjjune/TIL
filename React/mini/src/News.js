import React from "react";
import PropTypes from "prop-types";
import "./News.css";

function News({ title, url }) {
  return (
    <table className="table">
      <thead></thead>
      <tbody>
        <tr>
          <th className="title">{title}</th>
          <th className="url">({url})</th>
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
