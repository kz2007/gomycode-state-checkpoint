import React from "react";
import PropTypes from "prop-types";

function profile(props) {
  return (
    <div className="MyProfile">
      <img src={props.imgSrc}/>
      <p> {props.fullName}</p><br />
      <div style={props.style}>
      <h2>Bio: </h2> <p>{props.bio}</p>
      <h2>Profession:  </h2><p>{props.profession}</p>
      </div>
    </div>
  );
}

profile.defaultProps = {
  fullName: "Full Name",
  bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, enim doloribus quia voluptatibus odit minima sequi tempora commodi aliquam odio perferendis officia dolores cumque distinctio, minus architecto dolorem officiis corrupti!",
  profession: "None",
};

profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default profile;
