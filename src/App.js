import React, { Component } from "react";
import "./App.css";
import News from "./components/news";
import Form from "./components/form";

import Background01 from "../src/img/canada.png";
import Background02 from "../src/img/unitedstates.png";
import Background03 from "../src/img/search.png";
import Background04 from "../src/img/brazil.png";
import Background05 from "../src/img/france.png";

const API_KEY = "f3bd08bcc8fc4fb3a0ff9c689a5abf9a";

class App extends Component {
  state = {
    country: null,
    titleName: null,
    searchName: null,
    noResults: null,
    news: [
      {
        title: null,
        description: null,
        urlToImage: null
      },
      {
        title: null,
        description: null,
        urlToImage: null
      },
      {
        title: null,
        description: null,
        urlToImage: null
      }
    ]
  };

  getNews = async (event, countryCode, titleName) => {
    event.preventDefault();
    this.state.searchName = null;
    this.state.noResults = null;
    this.state.country = countryCode;
    this.state.titleName = titleName;
    console.log(this.props.children);
    console.log("o id é: " + countryCode);

    var url =
      "https://newsapi.org/v2/top-headlines?" +
      `country=${this.state.country}&` +
      `apiKey=${API_KEY}`;

    const api_call = await fetch(url);

    const data = await api_call.json();

    for (let i = 0; i < 3; i++) {
      this.state.news[i].title = data.articles[i].title;
      this.state.news[i].description = data.articles[i].description;
      this.state.news[i].urlToImage = data.articles[i].urlToImage;
    }

    this.setState({
      news: this.state.news
    });

    console.log(this.state);
  };

  getCustomNews = async event => {
    this.state.titleName = null;
    event.preventDefault();

    const userSearch = event.target.elements.userSearch.value;
    this.state.searchName = event.target.elements.userSearch.value;
    this.state.noResults = event.target.elements.userSearch.value;
    console.log(userSearch);

    var url =
      "https://newsapi.org/v2/top-headlines?" +
      `q=${userSearch}&` +
      "sortBy=popularity&" +
      "apiKey=f3bd08bcc8fc4fb3a0ff9c689a5abf9a";

    const api_call = await fetch(url);
    const data = await api_call.json();



    switch (true) {
      case (data.totalResults == 0):
        console.log(data.totalResults);
        this.state.searchName = null;
        for (let i = 0; i < 3; i++) {
          this.state.news[i].title = null;
          this.state.news[i].description = null;
          this.state.news[i].urlToImage = null;
        }
        break;
      case (data.totalResults == 1):
        console.log(data.totalResults);
        this.state.noResults = null;
        this.state.news[0].title = data.articles[0].title;
        this.state.news[0].description = data.articles[0].description;
        this.state.news[0].urlToImage = data.articles[0].urlToImage;
        for (let i = 1; i < 3; i++) {
              this.state.news[i].title = null;
              this.state.news[i].description = null;
              this.state.news[i].urlToImage = null;
            }
        break;
      case (data.totalResults == 2):
        console.log(data.totalResults);
        this.state.noResults = null;
        for (let i = 0; i < 2; i++) {
          this.state.news[i].title = data.articles[i].title;
          this.state.news[i].description = data.articles[i].description;
          this.state.news[i].urlToImage = data.articles[i].urlToImage;
        }
        this.state.news[2].title = data.articles[2].title;
        this.state.news[2].description = data.articles[2].description;
        this.state.news[2].urlToImage = data.articles[2].urlToImage;
        break;
      case (data.totalResults >= 3):
        console.log(data.totalResults);
        this.state.noResults = null;
        for (let i = 0; i < 3; i++) {
          this.state.news[i].title = data.articles[i].title;
          this.state.news[i].description = data.articles[i].description;
          this.state.news[i].urlToImage = data.articles[i].urlToImage;
        }
    }


    this.setState({
      news: this.state.news
    });

    console.log(this.state);
  };

  render() {
    return (
      <React.Fragment>
        <header>
          <h1>ReactNews</h1>
          <h4>
            Everything you need to know about what's happening around the world
          </h4>
          <div className="line" />
        </header>

        <div className="newsButtons">
          <div className="buttonBox" style={divStyleCA}>
            <button
              className="mainButton"
              onClick={event => {
                this.getNews(event, "ca", "Canada");
              }}
            >
              CANADA
            </button>
          </div>
          <div className="buttonBox" style={divStyleUS}>
            <button
              className="mainButton"
              onClick={event => {
                this.getNews(event, "us", "United States");
              }}
            >
              UNITED STATES
            </button>
          </div>
          <div className="buttonBox" style={divStyleSearch}>
            <Form getCustomNews={this.getCustomNews} />
            {/* <button className="mainButton">SEARCH</button> */}
          </div>
          <div className="buttonBox" style={divStyleBR}>
            <button
              className="mainButton"
              onClick={event => {
                this.getNews(event, "br", "Brazil");
              }}
            >
              BRAZIL
            </button>
          </div>
          <div className="buttonBox" style={divStyleFR}>
            <button
              className="mainButton"
              onClick={event => {
                this.getNews(event, "fr", "France");
              }}
            >
              FRANCE
            </button>
          </div>
        </div>

        <News
          noResults={this.state.noResults}
          searchName={this.state.searchName}
          titleName={this.state.titleName}
          title01={this.state.news[0].title}
          description01={this.state.news[0].description}
          urlToImage01={this.state.news[0].urlToImage}
          title02={this.state.news[1].title}
          description02={this.state.news[1].description}
          urlToImage02={this.state.news[1].urlToImage}
          title03={this.state.news[2].title}
          description03={this.state.news[2].description}
          urlToImage03={this.state.news[2].urlToImage}
        />
      </React.Fragment>
    );
  }
}

export default App;

var divStyleCA = {
  backgroundImage: `url(${Background01})`
};
var divStyleUS = {
  backgroundImage: `url(${Background02})`
};
var divStyleSearch = {
  backgroundImage: `url(${Background03})`
};
var divStyleBR = {
  backgroundImage: `url(${Background04})`
};
var divStyleFR = {
  backgroundImage: `url(${Background05})`
};
