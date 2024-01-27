import React from "react";
import "./ProfileCard.css";
import Skill from "./skill";
const ProfileCard = () => {
  return (
    <div className="card">
      <div className="img-section">
        <img src="images/developerimage.jpg" alt="" />
      </div>
      <div className="details-section">
        <h1>Abdulah Al Noman</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          voluptate non nam reprehenderit iure neque, eum sit ipsa! Accusamus
          repudiandae suscipit iste obcaecati quos assumenda sunt nesciunt unde
          odio nam.
        </p>
        <div className="input">
          <Skill emoji="❤️" skill="React" />
          <Skill emoji="😍" skill="JavaScript" />
          <Skill emoji="👌🎍😍" skill="HTML+CSS" />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
