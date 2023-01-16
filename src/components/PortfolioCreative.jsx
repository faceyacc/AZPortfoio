import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import SimpleReactLightbox from "simple-react-lightbox";
import { SRLWrapper } from "simple-react-lightbox";
import ReactTooltip from "react-tooltip";
import ModalVideo from "react-modal-video";
import Modal from "react-modal";
import Social from "./Social";
import Lightbox from "react-image-lightbox";



// const Portfolio = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [imagesIndex, setimagesIndex] = useState(null);
//   const [photoIndex, setPhotoIndex] = useState(0);

//   const Projects = [
//     {
//       id: 1,
//       name: "Intercambiador Del Norte",
//       images: [
//         "https://picsum.photos/id/237/200/300",
//         "https://picsum.photos/id/236/200/300",
//         "https://picsum.photos/id/235/200/300",
//         "https://picsum.photos/id/234/200/300",
//         "https://picsum.photos/id/233/200/300"
//       ],
//       address: {
//         lat: 15.553887638630355,
//         lng: -87.9969039384759
//       }
//     },
//     {
//       id: 2,
//       name: "Intercambiador De Occidente",
//       images: [
//         "https://picsum.photos/id/222/200/300",
//         "https://picsum.photos/id/221/200/300",
//         "https://picsum.photos/id/225/200/300",
//         "https://picsum.photos/id/224/200/300",
//         "https://picsum.photos/id/223/200/300"
//       ],
//       address: {
//         lat: 15.43197682825506,
//         lng: -88.02134910151912
//       }
//     },
//     {
//       id: 3,
//       name: "Puente Peatonal IHSS",
//       images: [
//         "https://picsum.photos/id/137/200/300",
//         "https://picsum.photos/id/136/200/300",
//         "https://picsum.photos/id/135/200/300",
//         "https://picsum.photos/id/134/200/300",
//         "https://picsum.photos/id/133/200/300"
//       ],
//       address: {
//         lat: 15.541246406040697,
//         lng: -88.01537077792884
//       }
//     },
//     {
//       id: 4,
//       name: "Paso A Desnivel Col. Santa Martha",
//       images: [
//         "https://picsum.photos/id/37/200/300",
//         "https://picsum.photos/id/36/200/300",
//         "https://picsum.photos/id/35/200/300",
//         "https://picsum.photos/id/34/200/300",
//         "https://picsum.photos/id/33/200/300"
//       ],
//       address: {
//         lat: 15.497648696265482,
//         lng: -87.98749457873993
//       }
//     },
//     {
//       id: 5,
//       name: "Puente A Desnivel 27 Calle",
//       images: [
//         "https://picsum.photos/id/500/200/300",
//         "https://picsum.photos/id/501/200/300",
//         "https://picsum.photos/id/502/200/300",
//         "https://picsum.photos/id/503/200/300",
//         "https://picsum.photos/id/504/200/300"
//       ],
//       address: {
//         lat: 15.478059823233426,
//         lng: -87.97416842866024
//       }
//     },
//     {
//       id: 6,
//       name: "Ampliación De Bulevar 33 Calle",
//       images: [
//         "https://picsum.photos/id/101/200/300",
//         "https://picsum.photos/id/102/200/300",
//         "https://picsum.photos/id/103/200/300",
//         "https://picsum.photos/id/104/200/300",
//         "https://picsum.photos/id/105/200/300"
//       ],
//       address: {
//         lat: 15.47188476038704,
//         lng: -88.00512399419196
//       }
//     },
//     {
//       id: 7,
//       name: "Paso A Desnivel Blvd Del Este Con Salida Vieja A La Lima",
//       images: [
//         "https://picsum.photos/id/27/200/300",
//         "https://picsum.photos/id/26/200/300",
//         "https://picsum.photos/id/25/200/300",
//         "https://picsum.photos/id/24/200/300",
//         "https://picsum.photos/id/23/200/300"
//       ],
//       address: {
//         lat: 15.50228931099425,
//         lng: -87.99440008840381
//       }
//     },
//     {
//       id: 8,
//       name:
//         "Paso a Desnivel en la Intersección Bulevar Del Norte y Acceso A El Zapotal",
//       images: [
//         "https://picsum.photos/id/8/200/300",
//         "https://picsum.photos/id/9/200/300"
//       ],
//       address: {
//         lat: 15.551436185695238,
//         lng: -88.00215568011586
//       }
//     }
//   ];
  
//   return(
//     <>
//       {Projects.map((project, index) => {
//         return (
//         <ul className="gallery_zoom">
//           <li data-aos="fade-right" data-aos-duration="1200">
//              <div className="inner">
//              <div className="entry tokyo_tm_portfolio_animation_wrap">
            
//           <img
//             key={project.id}
//             onClick={() => {
//               setIsOpen(true);
//               setimagesIndex(index);
//             }}
//             loading="lazy"
//             className="rounded-img img-project shadow-three"
//             src={project.images[0]}
//             alt={project.name}
//           />
//           </div>
//           </div>
//           </li>
//           </ul>
//         );
//       })}

//       {isOpen && (
//         <Lightbox
//           imageLoadErrorMessage="This image failed to load"
//           imageTitle={Projects[imagesIndex].name}
//           mainSrc={Projects[imagesIndex].images[photoIndex]}
//           nextSrc={
//             Projects[imagesIndex].images[
//               (photoIndex + 1) % Projects[imagesIndex].images.length
//             ]
//           }
//           prevSrc={
//             Projects[imagesIndex].images[
//               (photoIndex + Projects[imagesIndex].images.length - 1) %
//                 Projects[imagesIndex].images.length
//             ]
//           }
//           onCloseRequest={() => {
//             setIsOpen(false);
//             setimagesIndex(null);
//           }}
//           onMovePrevRequest={() =>
//             setPhotoIndex(
//               (photoIndex + Projects[imagesIndex].images.length - 1) %
//                 Projects[imagesIndex].images.length
//             )
//           }
//           onMoveNextRequest={() =>
//             setPhotoIndex(
//               (photoIndex + 1) % Projects[imagesIndex].images.length
//             )
//           }
//         />
//       )}
//     </>
//   )

// }



const Portfolio = () => {
  const photos = [
    {src: "assets/img/portfolio/House No.12 .png", alt: "House No. 1"},
    {src: "assets/img/portfolio/House No.13.png", alt: "House No. 2"},
    {src: "assets/img/portfolio/House No. 11.jpg", alt: "House No. 3"},

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
      {/* <SimpleReactLightbox> */}
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
                      <SimpleReactLightbox>
                        <SRLWrapper key={photo.src}>
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

                                {/* {photos.map((imgSrc, index) => (<img src={imgSrc.src} key={index} alt={imgSrc.alt}/>))} */}
                                
                              </a>
                                {/* <ReactTooltip
                                  id="shot"
                                  place="bottom"
                                  type="light"
                                  effect="float"
                                  className="tooltip-wrapper"
                                >
                                  <div>
                                    <h5>Hose No 1</h5>
                                    <span>Shot</span>
                                  </div>
                                </ReactTooltip> */}
                            </div>
                          </div>
                        </li>
                        </SRLWrapper>
                     </SimpleReactLightbox>
                    ))}
                  </div>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </div>
      



      {/* all modal video and popup goes here */}
      {/* <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1gyTUHP6ne8"
        onClose={() => setOpen(false)}
      /> */}
      {/* <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={isOpen2}
        videoId="100171151"
        onClose={() => setOpen2(false)}
      /> */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen3}
        onRequestClose={toggleModalThree}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalThree}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/6.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Selena Gomez</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/8.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/2.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/3.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}

      {/* START MODAL FOR PORTFOLIO DETAILS */}
      <Modal
        isOpen={isOpen4}
        onRequestClose={toggleModalFour}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="tokyo_tm_modalbox_news portfolio_tm_modalbox">
          <button className="close-modal" onClick={toggleModalFour}>
            <img src="assets/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* END CLOSE ICON */}
          <div className="box_inner">
            <div className="description_wrap scrollable">
              <div className="image">
                <img src="assets/img/thumbs/4-3.jpg" alt="tumb" />
                <div
                  className="main"
                  style={{
                    backgroundImage: "url(assets/img/portfolio/7.jpg)",
                  }}
                ></div>
              </div>
              {/* END IMAGE */}
              <div className="portfolio_main_title">
                <h3>Ave Simone</h3>
                <span>Details</span>
              </div>
              {/* END portfolio_main_title */}
              <div className="main_details">
                <div className="textbox">
                  <p>
                    We live in a world where we need to move quickly and iterate
                    on our ideas as flexibly as possible. Building mockups
                    strikes the ideal balance between true-life representation
                    of the end product and ease of modification.
                  </p>
                  <p>
                    Mockups are useful both for the creative phase of the
                    project - for instance when you're trying to figure out your
                    user flows or the proper visual hierarchy - and the
                    production phase when they will represent the target
                    product. Making mockups a part of your creative and
                    development process allows you to quickly and easily ideate.
                  </p>
                </div>
                <div className="detailbox">
                  <ul>
                    <li>
                      <span className="first">Client</span>
                      <span>Alvaro Morata</span>
                    </li>
                    <li>
                      <span className="first">Category</span>
                      <span>Details</span>
                    </li>
                    <li>
                      <span className="first">Date</span>
                      <span>March 07, 2021</span>
                    </li>
                    <li>
                      <span className="first">Share</span>
                      <Social />
                      {/* END SOCIAL SHARE */}
                    </li>
                  </ul>
                </div>
              </div>
              {/* main_details */}

              <div className="additional_images">
                <ul className="gallery_zoom">
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/6.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/5.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                  <li>
                    <div className="list_inner">
                      <div className="my_image">
                        <img src="img/thumbs/4-2.jpg" alt="thumb" />
                        <div
                          className="main"
                          style={{
                            backgroundImage: "url(assets/img/portfolio/4.jpg)",
                          }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  {/* END SHOT */}
                </ul>
              </div>
            </div>
          </div>
          {/* END BOX INNER */}
        </div>
        {/* END MODALBOX NEWS */}
      </Modal>
      {/* END MODAL FOR PORTFOLIO DETAILS */}
    </>
  );
};

export default Portfolio;
