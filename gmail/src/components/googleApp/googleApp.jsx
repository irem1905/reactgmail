
import React from "react";
import "./googleApp.scss"; 
import adsIcon from "../../assets/images/ads.png"
import cloudSearchIcon from "../../assets/images/cloudSearch.png"
import documentIcon from "../../assets/images/document.png"
import driveIcon from "../../assets/images/drive.png"
import mapIcon from "../../assets/images/map.png"
import meetIcon from "../../assets/images/meet.png"
import newIcon from "../../assets/images/new.png"
import photoIcon from "../../assets/images/photo.png"
import searchIcon from "../../assets/images/search.png"
import slideIcon from "../../assets/images/slide.png"
import soundIcon from "../../assets/images/sound.png"
import tableIcon from "../../assets/images/table.png" 
import translateIcon from "../../assets/images/translate.png"
import youtubeIcon from "../../assets/images/youtube.png"

const GoogleApp = ({ closePopup }) => {
  return (
    <div className="google-apps">
      <div className="google-apps__grid">
        <div className="google-apps__item">
          <img src={adsIcon} alt="Ads"/>
          <span>Ads</span>
        </div>

        <div className="google-apps__item">
          <img src={cloudSearchIcon} alt="Cloud Search"/>
          <span>Search</span>
        </div>

        <div className="google-apps__item">
          <img src={documentIcon} alt="Document"/>
          <span>Document</span>
        </div>

        <div className="google-apps__item">
          <img src={driveIcon} alt="Drive"/>
          <span>Drive</span>
        </div>

        <div className="google-apps__item">
          <img src={mapIcon} alt="Map"/>
          <span>Map</span>
        </div>

        <div className="google-apps__item">
          <img src={meetIcon} alt="Meet"/>
          <span>Meet</span>
        </div>

        <div className="google-apps__item">
          <img src={newIcon} alt="New"/>
          <span>New</span>
        </div>

        <div className="google-apps__item">
          <img src={photoIcon} alt="Photo"/>
          <span>Search</span>
        </div>
        
        <div className="google-apps__item">
          <img src={translateIcon} alt="translate" />
          <span>translate</span>
        </div>

        <div className="google-apps__item">
          <img src={searchIcon} alt="Search" />
          <span>Search</span>
        </div>

        <div className="google-apps__item">
          <img src={slideIcon} alt="Slide" />
          <span>Slide</span>
        </div>

        <div className="google-apps__item">
          <img src={soundIcon} alt="Sound" />
          <span>Sound</span>
        </div>

        <div className="google-apps__item">
          <img src={tableIcon} alt="Table" />
          <span>Table</span>
        </div>

        <div className="google-apps__item">
          <img src={translateIcon} alt="Translate" />
          <span>Translate</span>
        </div>

        <div className="google-apps__item">
          <img src={youtubeIcon} alt="Youtube" />
          <span>Youtube</span>
        </div>
          
      </div>
      {/* Kapatma butonu */}
      <button onClick={closePopup} className="google-apps__close-btn">
        Kapat
      </button>
    </div>
  );
};

export default GoogleApp;
