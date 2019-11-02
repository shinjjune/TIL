import React, { Component } from "react";
import Movie from "./Movie";

const key = "f3a77768a462fb5daf3012b55039a9cb";

const getDate = new Date();
const yDate = getDate.getTime(1 * 24 * 60 * 60 * 1000);
getDate.setTime(yDate);
var yYear = getDate.getFullYear();
var yMonth = getDate.getMonth() + 1;
var yDay = getDate.getDate() - 1;

if (yMonth < 10) {
  yMonth = "0" + yMonth;
}
if (yDay < 10) {
  yDay = "0" + yDay;
}
const resultDate = yYear + "-" + yMonth + "-" + yDay;

const res = resultDate.slice(0, 10).replace(/-/g, "");

class App extends Component {
  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((dailyBoxOfficeList, index) => {
      console.log(dailyBoxOfficeList);
      return (
        <Movie
          rank={dailyBoxOfficeList.rank}
          movieNm={dailyBoxOfficeList.movieNm}
          openDt={dailyBoxOfficeList.openDt}
          key={index}
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch(
      `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${res}&itemPerPage=5`
    )
      .then(a => a.json())
      .then(json => json.boxOfficeResult.dailyBoxOfficeList)
      .catch(err => console.log(err));
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App-loading"}>
        {movies ? this._renderMovies() : "로딩중 ..."}
      </div>
    );
  }
}

export default App;
