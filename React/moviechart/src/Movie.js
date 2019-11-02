import React from "react";
import PropTypes from "prop-types";

function Movie({ rank, movieNm, openDt }) {
  return (
    <div className="Movie">
      <h1>
        {rank}위:{movieNm}
      </h1>
      <h3>개봉일:{openDt}</h3>
    </div>
  );
}

Movie.propTypes = {
  rank: PropTypes.string.isRequired,
  movieNm: PropTypes.string.isRequired
};

export default Movie;
