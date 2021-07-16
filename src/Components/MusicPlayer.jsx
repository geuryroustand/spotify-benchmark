import React from "react";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  return (
    <div className="music-player">
      <div className="d-flex justify-content-between justify-content-between icon-like align-items-center ">
        <div className="d-flex">
          <img src="./footer-album-image.jpg" alt="" />
          <div className="d-flex text-album ">
            <a href="#">Bohemian Rhapsody </a>
            <a href="#">Queen</a>
          </div>
          <div className="d-flex  text-album ">
            <i class="far fa-heart"></i>
            <i className="far fa-list-alt"></i>
          </div>
        </div>

        <div>
          <div className="play-icon-list ">
            <i className="fas fa-random"></i>
            <i className="fas fa-step-backward"></i>
            <i className="fas fa-2 fa-play-circle"></i>
            <i className="fas fa-step-forward"></i>
            <i className="fas fa-redo-alt"></i>
          </div>
          <div>
            <input type="range" name="" id="" />
          </div>
        </div>

        <div className="player-music-icon-right">
          <i className="fas fa-list-ol"></i>
          <i class="bi bi-speaker"></i>
          <i class="fas fa-volume-up">
            <input type="range" name="" id="" />
          </i>
          <i class="fas fa-expand-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
