import React, { Component } from 'react';

import MovieChart from '../component/moviechart';

class Test extends Component{
  movieChartData= [
    {
      num: "No.1",
      // img: {
      //   src:"",
      //   alt:"",
      // }
      title: "Frozen2",
      rate: "93.2",
      releasedate:"2019.11.21"
      
    },

    {
      num: "No.2",
      title: "블랙머니",
      rate: "4.3",
      releasedate:"2019.11.13"

    },

    {
      num: "No.3",
      title: "신의 한수-귀수편",
      rate: "0.6",
      releasedate:"2019.11.07"
    },

    {
      num: "No.4",
      title: "윤희에게",
      rate: "0.4",
      releasedate:"2019.11.14"
    },

    {
      num: "No.5",
      title: "82년생 김지영",
      rate: "0.4",
      releasedate:"2019.10.23"
    }
  ]

  render() {
    return(
      <div className="Test">
        <h1>무비차트</h1>
        <hr/>
        <div class="overall">
        {this.movieChartData.slice(0,3).map(movieData => {
          return (
          <MovieChart {...movieData}></MovieChart> );
        })}
        </div>

        <hr/>
        <div class="overall2">
        {this.movieChartData.slice(3).map(movieData => {
          return (
          <MovieChart {...movieData}></MovieChart> );
        })}
        </div>



      </div>
    );
  }
}

export default Test;