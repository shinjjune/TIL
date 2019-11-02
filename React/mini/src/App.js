import React, { Component } from "react";
import News from "./News";
import "./App.css";

class App extends Component {
  state = {};
  componentDidMount() {
    this._getNews();
  }
  _renderNews = () => {
    const news = this.state.news.map(articles => {
      console.log(articles);
      return (
        <News
          author={articles.author}
          title={articles.title}
          url={articles.url}
          source={articles.source}
        />
      );
    });
    return news;
  };

  _getNews = async () => {
    const news = await this._callApi();
    this.setState({
      news
    });
  };
  _callApi = () => {
    return fetch(
      `https://newsapi.org/v2/top-headlines?country=kr&apiKey=3659c1fa349c4449bd079c8211909132`
    )
      .then(a => a.json())
      .then(json => json.articles)
      .catch(err => console.log(err));
  };
  render() {
    const { news } = this.state;
    return (
      <>
        <header className="header-padding">TODAY NEWS Top 20!!</header>
        <main className="container">
          <div className={news ? "App" : "App-loading"}>
            {news ? this._renderNews() : "로딩중 ..."}
          </div>
        </main>
      </>
    );
  }
}

export default App;
