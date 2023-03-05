import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { FaMoon, FaSun } from "react-icons/fa";
import { Link } from "react-router-dom";
import Home from "../../components/Home";
import Portfolio from "../../components/PortfolioCreative";
import Contact from "../../components/Contact";
import { motion } from 'framer-motion/dist/framer-motion'


const HomeLight = () => {
  const [isDark, setIsDark] = useState(false)
  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "light");
      document.querySelector("body").classList.add("light");
      document.querySelector("body").classList.remove("dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "dark");
      document.querySelector("body").classList.add("dark");
      document.querySelector("body").classList.remove("-light");
      setIsDark(true);
    }
  }

  // Hover dropdown menu
  const [isHover, toggleHover] = useState(false)

  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3
      },
      display: "block"
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3
      },
      transitionEnd: {
        display: "none"
      }
    }
  };


  const MotionTab = motion(Tab)


  return (
    <>
      <label
        className={`theme-switcher-label d-flex  ${isDark ? "active" : ""}`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <i className="light-text" title="Switch to Dark">
            <FaMoon />
          </i>
          <i className="dark-text" title="Switch to Light">
            <FaSun />
          </i>
        </div>
      </label>
      
      <Tabs  defaultIndex={0}>
        <TabList>
          <div className="leftpart">
            <div className="leftpart_inner">
              <div className="logo">
                <a className="navbar-brand" href="/">
                  <img src="/assets/img/logo/logo.png" alt="brand" />
                </a>
              </div>
              <div className="menu">
                <ul>
                  <Tab>
                    <span className="menu_content">Hossme</span>
                  </Tab>
                
                  <Tab>
                    <motion.div     
                      className="menu-item"
                      onHoverStart={toggleHoverMenu}
                      onHoverEnd={toggleHoverMenu}
                    >
                        <span className="menu_content">Series</span>
                      <motion.div
                        className="sub-menu"
                        initial="exit"
                        animate={isHover ? "enter" : "exit"}
                        variants={subMenuAnimate}
                      >
                        <div className="dropdown_menue_container">
                          <li><a href="/House">House</a></li>
                          <li><a href="/Absence" >Absence</a></li>
                        </div> 
                      </motion.div>
                    </motion.div>
                  </Tab>

                  <Tab>
                    <span className="menu_content">Contact</span>
                  </Tab>
                </ul>
              </div>
            </div>
          </div>
        </TabList>

        <div className="rightpart">
          <div className="rightpart_in">
            <div className="tokyo_tm_section">
              <div className="container">
                <TabPanel >
                  <div data-aos="fade-right" data-aos-duration="1200">
                    <Home />
                  </div>
                </TabPanel>

                <TabPanel>
                  <Portfolio/>
                </TabPanel>


                <TabPanel>
                  <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <Contact />
                  </div>
                </TabPanel>
                
              </div>
            </div>
          </div>
        </div>
        
      </Tabs>

    </>
  );
};

export default HomeLight;
