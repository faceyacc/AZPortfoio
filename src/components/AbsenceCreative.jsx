import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import ReactTooltip from "react-tooltip";


const Absence = () => {
  const photos = [
    {src: "assets/img/portfolio/absence/matches.png", alt: "Matches"},
    {src: "assets/img/portfolio/absence/oil.png", alt: "Oil"},
    {src: "assets/img/portfolio/absence/wood.png", alt: "Wood"},
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
            <div className="absence_title">
              <div className="left">
                {/* <span>House Series</span> */}
                <h3>Absence</h3>
               
              </div>
            </div>
          </div>
          {/* END TOKYO_TM_TITLE */}

          <div className="portfolio_filter">
            <Tabs>
              {/* END TABLIST */}
              <div className="list_wrapper">
                <TabPanel>
                  <div className="absence_portfolio_view">                                        
                    {photos.map(photo => (
                        <li data-aos="fade-right" data-aos-duration="1200">
                          <div>
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

export default Absence;
