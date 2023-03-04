// import React, { useState } from "react";
// // import Modal from "react-modal";
// import Brand from "./Brand";

// // Modal.setAppElement("#root");

// const About = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   function toggleModal() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <>
//       <div className="tokyo_tm_about">
//         <div className="about_image ">
//           <img src="assets/img/slider/1.jpg" alt="about" />
//         </div>
//         {/* <div className="o-video">
//           <iframe src="https://www.youtube.com/embed/0yW7w8F2TVA"></iframe>
//         </div> */}
//         {/* END ABOUT IMAGE */}
//         <div className="description">
//           <h3 className="name">"Process above product"</h3>
//           <div className="description_inner">
//             <div className="left">
//               <p>
//               A to Z Studio is a multi-faceted, collaborative, and creative team run by Angelica and Zach, who  met in Architecture school. After graduation, they both wanted to stay productive and clutch on their creative selves. What started as a personal and humble project then turned into a project for a new “school of thought.” In August 2022, they decided to work together again by combining Angelica’s talent for hand drawing, Zach’s vision for animation, and their passion for design. 

//               </p>
//               {/* <div className="tokyo_tm_button">
//                 <button onClick={toggleModal} className="ib-button">
//                   Read More
//                 </button>
//               </div> */}
//               {/* END TOKYO BUTTON */}
//             </div>
//             {/* END LEFT */}
//             <div className="right">
//               <p>
//               A to Z Studio promotes the duo’s specialties and passion in art, animation, design, and more through various projects and series. The goal is to continue lighting Angelica’s and Zach’s creative torches and sharing it with friends, family, and others. 
     
//               </p>
         
//               {/* END UL */}
//             </div>
//             {/* END RIGHT */}
//           </div>
//           {/* END DESCRIPTION INNER */}
//         </div>
//       </div>

//       {/* START ABOUT POPUP BOX */}
//       <Modal
//         isOpen={isOpen}
//         onRequestClose={toggleModal}
//         contentLabel="My dialog"
//         className="mymodal"
//         overlayClassName="myoverlay"
//         closeTimeoutMS={500}
//       >
//         <div className="tokyo_tm_modalbox_about">
//           <button className="close-modal" onClick={toggleModal}>
//             <img src="assets/img/svg/cancel.svg" alt="close icon" />
//           </button>
//           {/* END POPUP CLOSE BUTTON */}
//           <div className="box-inner">
//             <div
//               className="description_wrap scrollable"
//               data-aos="fade-right"
//               data-aos-duration="1200"
//             >
//               <div className="my_box">
//                 <div className="left">
//                   <div className="about_title">
//                     <h3>Photography Skills</h3>
//                   </div>
//                   {/* END ABOUT TITLE */}

//                   <div className="tokyo_progress">
//                     <div className="progress_inner" data-value="95">
//                       <span>
//                         <span className="label">Wedding Photography</span>
//                         <span className="number">95%</span>
//                       </span>
//                       <div className="background">
//                         <div className="bar">
//                           <div
//                             className="bar_in"
//                             style={{ width: 95 + "%" }}
//                           ></div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="progress_inner" data-value="80">
//                       <span>
//                         <span className="label">Lifestyle Photography</span>
//                         <span className="number">80%</span>
//                       </span>
//                       <div className="background">
//                         <div className="bar">
//                           <div
//                             className="bar_in"
//                             style={{ width: 80 + "%" }}
//                           ></div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="progress_inner" data-value="90">
//                       <span>
//                         <span className="label">Family Photography</span>
//                         <span className="number">90%</span>
//                       </span>
//                       <div className="background">
//                         <div className="bar">
//                           <div
//                             className="bar_in"
//                             style={{ width: 90 + "%" }}
//                           ></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* END PROGRESS */}
//                 </div>
//                 {/* END LEFT */}

//                 <div className="right">
//                   <div className="about_title">
//                     <h3>Language Skills</h3>
//                   </div>
//                   {/* END TITLE */}
//                   <div className="tokyo_progress">
//                     <div className="progress_inner" data-value="95">
//                       <span>
//                         <span className="label">English</span>
//                         <span className="number">95%</span>
//                       </span>
//                       <div className="background">
//                         <div className="bar">
//                           <div
//                             className="bar_in"
//                             style={{ width: 95 + "%" }}
//                           ></div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="progress_inner" data-value="90">
//                       <span>
//                         <span className="label">Japanese</span>
//                         <span className="number">90%</span>
//                       </span>
//                       <div className="background">
//                         <div className="bar">
//                           <div
//                             className="bar_in"
//                             style={{ width: 90 + "%" }}
//                           ></div>
//                         </div>
//                       </div>
//                     </div>

//                     <div className="progress_inner" data-value="85">
//                       <span>
//                         <span className="label">Arabian</span>
//                         <span className="number">85%</span>
//                       </span>
//                       <div className="background">
//                         <div className="bar">
//                           <div
//                             className="bar_in"
//                             style={{ width: 85 + "%" }}
//                           ></div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   {/* EDN TOKYO PROGRESS */}
//                 </div>
//                 {/* END RIGHT */}
//               </div>
//               {/* END MYBOX */}

//               <div className="counter">
//                 <div className="about_title">
//                   <h3>Fun Facts</h3>
//                 </div>
//                 <ul>
//                   <li>
//                     <div className="list_inner">
//                       <h3>777+</h3>
//                       <span>Projects Completed</span>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="list_inner">
//                       <h3>3K</h3>
//                       <span>Happy Clients</span>
//                     </div>
//                   </li>
//                   <li>
//                     <div className="list_inner">
//                       <h3>9K+</h3>
//                       <span>Lines of Code</span>
//                     </div>
//                   </li>
//                 </ul>
//                 {/* END COUNTER CONTENT */}
//               </div>
//               {/* END COUNTER */}

//               <div className="partners">
//                 <div className="about_title">
//                   <h3>Our Partners</h3>
//                 </div>
//                 <Brand />
//               </div>
//               {/* END PARTNER SLIDER */}
//             </div>
//           </div>
//         </div>
//       </Modal>
//       {/* END ABOUT POPUP BOX */}
//     </>
//   );
// };

const About = () => {
    return (
        <>
            <h1>Hej hej</h1>
        </>
    )
}

export default About;
