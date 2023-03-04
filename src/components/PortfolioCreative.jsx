import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactTooltip from "react-tooltip";
import Social from "./Social";


const Portfolio = () => {
  const photos = [
    {src: "assets/img/portfolio/house1.png", alt: "House No. 1"},
    {src: "assets/img/portfolio/house2.png", alt: "House No. 2"},
    {src: "assets/img/portfolio/house4.png", alt: "House No. 3"},
    {src: "assets/img/portfolio/house4.png", alt: "House No. 4"},
    {src: "assets/img/portfolio/house5.png", alt: "House No. 5"},
    {src: "assets/img/portfolio/house6.png", alt: "House No. 6"},
    {src: "assets/img/portfolio/house6.png", alt: "House No. 7"},
    {src: "assets/img/portfolio/house8.png", alt: "House No. 8"},
    {src: "assets/img/portfolio/house9.png", alt: "House No. 9"},
    {src: "assets/img/portfolio/house10.png", alt: "House No. 10"},
    {src: "assets/img/portfolio/house11.png", alt: "House No. 11"},
    {src: "assets/img/portfolio/house12.png", alt: "House No. 12"},
  ]


  // for popup video
  const [isOpen, setOpen] = useState(false);
  const [isOpen2, setOpen2] = useState(false);

  // for modal
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }

  return (
    <>
        <div className="tokyo_tm_portfolio">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                {/* <span>House Series</span> */}
                <h3>House Series</h3>
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="portfolio_filter">
            <Tabs>
              {/* END TABLIST */}
              <div className="list_wrapper">
                <TabPanel>
                  <div className="portfolio_list">                                        
                    {photos.map(photo => (
                        <li data-aos="fade-right" data-aos-duration="1200">
                          <div className="inner">
                            <div className="entry tokyo_tm_portfolio_animation_wrap">
                              <a>
                                <img
                                  src={photo.src}
                                  alt={photo.alt}
                                  data-tip
                                  data-for="shot"
                                />
                              </a>
                                <ReactTooltip
                                  id="shot"
                                  place="bottom"
                                  type="light"
                                  effect="float"
                                  className="tooltip-wrapper"
                                >
                                    <span>{photo.alt}</span> 
                                </ReactTooltip>
                            </div>
                          </div>
                        </li>
                    ))}
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
    </>
  );
};

export default Portfolio;
