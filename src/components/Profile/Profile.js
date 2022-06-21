import React, { Component } from "react";
import ImgProfile from "../../components/images/idushiy k reke.jpeg";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="avatar_img">
          <img
            style={{ marginTop: "20px" }}
            className="responsive-img"
            src={ImgProfile}
            alt="Alihan"
          />
        </div>
        <div className="card light-blue darken-4 z-depth-0 hide-on-large-only">
          <div className="card-content center social">
            <h2 className="grey-text text-lighten-2">
              <strong>Alihan</strong>
            </h2>
            <h5 className="grey-text text-lighten-1">JS DEVELOPER</h5>
            <a href="https://facebook.com" target="_blank">
              <i className="fab fa-facebook-square fa-2x"></i>
            </a>
            <a href="https://twitter.com" target="_blank">
              <i className="fab fa-twitter-square fa-2x"></i>
            </a>
            <a href="https://github.com" target="_blank">
              <i className="fab fa-github-square fa-2x"></i>
            </a>
          </div>
        </div>
        <div className="card light-blue darken-4 z-depth-0">
          <div className="card-content">
            <h6 className="white-text">
              <strong>#PROFILE</strong>
            </h6>
            <hr />
            <p className="grey-text text-lighten-3 pt">
              Я блять в своем познании настолько преисполнился, что я как будто
              бы уже сто триллионов миллиардов лет блять проживаю на триллионах
              и триллионах таких же планет, как эта Земля, мне этот мир
              абсолютно понятен, и я здесь ищу только одного блять - покоя,
              умиротворения и вот этой гармонии, от слияния с бесконечно вечным.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
