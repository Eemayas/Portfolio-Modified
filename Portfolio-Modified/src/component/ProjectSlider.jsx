// import React, { useState } from "react";
// // import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { useLocation } from "react-router-dom";
// // import { RxDotFilled } from "react-icons/rx";
// import { projects } from "../constants";

// const ProjectSlider = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const name = searchParams.get("name");
//   const slidesSS =
//     projects[projects.findIndex((car) => car.name === name)].imageList;

//   const slides = slidesSS;
//   console.log(slides);
//   const [prevIndex, setPrevIndex] = useState(0);
//   const [currentIndex, setCurrentIndex] = useState(1);
//   const [nextIndex, setNextIndex] = useState(2);
//   const prevSlide = () => {
//     const isPrevFirstSlide = prevIndex === 0;
//     const isFirstSlide = currentIndex === 0;
//     const isNextFirstSlide = nextIndex === 0;
//     const newPrevIndex = isPrevFirstSlide ? slides.length - 1 : prevIndex - 1;
//     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
//     const newNextIndex = isNextFirstSlide ? slides.length - 1 : nextIndex - 1;
//     setPrevIndex(newPrevIndex);
//     setCurrentIndex(newIndex);
//     setNextIndex(newNextIndex);
//   };

//   const nextSlide = () => {
//     const isPrevLastSlide = prevIndex === slides.length - 1;
//     const isLastSlide = currentIndex === slides.length - 1;
//     const isNextSlideLast = nextIndex === slides.length - 1;
//     const newIndex = isLastSlide ? 0 : currentIndex + 1;
//     const nextIndex1 = isNextSlideLast ? 0 : newIndex + 1;
//     const newPrevIndex = isPrevLastSlide ? 0 : prevIndex + 1;
//     setPrevIndex(newPrevIndex);
//     setNextIndex(nextIndex1);
//     setCurrentIndex(newIndex);
//   };

//   const goToSlide = (slideIndex) => {
//     setCurrentIndex(slideIndex);
//   };

//   return (
//     <>
//       <div className="max-w-[1400px] flex items-center justify-center h-auto gap-10 w-full m-auto py-16 px-4 relative group">
//         <img
//           loading="lazy"
//           src={slides[prevIndex].url}
//           className="shadow-slate-500 shadow-md hidden lg:block w-[10%]  h-[60%] rounded-2xl bg-center bg-cover duration-500"
//         />
//         <img
//           loading="lazy"
//           src={slides[currentIndex].url}
//           className="shadow-slate-500 shadow-md aspect-w-16 aspect-h-9 w-auto md:w-[70%] h-auto rounded-2xl bg-center bg-cover duration-500 object-cover"
//         />
//         <img
//           loading="lazy"
//           src={slides[nextIndex].url}
//           className="shadow-slate-500 shadow-md hidden lg:block w-[10%]  h-[60%] rounded-2xl bg-center bg-cover duration-500"
//         />

//         <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//           {/* <BsChevronCompactLeft onClick={prevSlide} size={30} /> */}
//         </div>

//         <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
//           {/* <BsChevronCompactRight onClick={nextSlide} size={30} /> */}
//         </div>
//       </div>
//       <h4 className="text-white text-center font-black text-[30px] duration-500">
//         {slides[currentIndex].title}
//       </h4>
//       <div className="flex top-4 justify-center py-2">
//         {slides.map((slide, slideIndex) => (
//           <div
//             key={slideIndex}
//             onClick={() => goToSlide(slideIndex)}
//             className="text-2xl cursor-pointer"
//           >
//             {/* <RxDotFilled /> */}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// export default ProjectSlider;
