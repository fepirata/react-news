import React, { Component } from "react";

const News = props => (
  <div className="newsWrapper">
{
  props.titleName &&

  <div className="newsTitleCountry">
    <h1>Discover what is happening in {props.titleName}</h1>
    <div className="internalLine"></div>
  </div>

}

{
  props.searchName && 

  <div className="newsTitleCountry">
    <h1>Results for: {props.searchName}</h1>
    <div className="internalLine"></div>
  </div>

}
{
  props.noResults &&

  <div className="newsTitleCountry">
    <h1>Results for: {props.noResults}</h1>
    <h2>No results where found for your search, try again</h2>
    <div className="internalLine"></div>
  </div>

}
  {
    props.title01 &&

    <div className="newsBox">
      <img src={props.urlToImage01} />
      <h2>{props.title01}</h2>
      <p>{props.description01}</p>
    </div>

  }
  {
    props.title02 &&

    <div className="newsBox">
      <img src={props.urlToImage02} />
      <h2>{props.title02}</h2>
      <p>{props.description02}</p>
    </div>
    }
    {
      props.title03 &&
    <div className="newsBox">
      <img src={props.urlToImage03} />
      <h2>{props.title03}</h2>
      <p>{props.description03}</p>
    </div>
    }
  </div>
);

export default News;
