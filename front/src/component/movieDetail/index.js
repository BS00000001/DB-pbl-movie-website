import React, { Component } from "react";
import "./style/moviedetail.css";

class Moviedetail extends Component {
  render() {
    return (
      <div className="Moviedetail">
        <h2>영화 상세페이지</h2>
        <hr></hr>
        <div className="img2">
          <img
            className="logo"
            {...this.props.data.img2}
            alt={this.props.data.title2 + "poster"}
            title2={this.props.data.title2}
            width="280px"
            height="300px"
          ></img>
        </div>
        <div class="detail">
          <ul>
          <div className="title2">{this.props.data.title2}</div>
            </ul>
          <ul>
            <li>
              <div className="releasedate"><span class="detailed">개봉 일자:</span> {this.props.data.releasedate}</div>
            </li>
            <li>
              <div className="rating"><span class="detailed">예매율: </span> {this.props.data.rating} %</div>
            </li>   
          </ul>
          <ul>
            <li>
              <div className="grade"><span class="detailed">등급: </span> {this.props.data.grade}</div>
            </li>
            <li>
              <div className="screening"><span  class="detailed">타입: </span> {this.props.data.screening}</div>
            </li>
          </ul>
        
          <ul>
            <li>
             <div className="pd"><span  class="detailed">감독: </span>{this.props.data.pd}</div>
            </li>
            <li>
              <div className="actor"><span  class="detailed">배우: </span>{this.props.data.actor}</div>
            </li>
          </ul>
        <div className="ticket2"></div>
        </div>
      </div>
    );
  }
}

export default Moviedetail;
