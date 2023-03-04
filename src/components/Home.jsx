import React from "react";
import Social from "./Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(assets/img/slider/greyback.gif)",
              }}
            >
            </div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">A to Z Studio</h3>
            <p className="job">
              Hi! Angelica and Zach here. She likes to draw, he likes to animate, and together, we are A to Z Studio.
              Welcome to our multifaceted and explorative studio where we combine our love for art, design, animation 
              & more! We are an artist-duo that enjoys creating and building anything between the letters A to Z.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
