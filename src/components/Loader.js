// import React from "react";
// import { motion } from "framer-motion";
// import { StaticImage } from "gatsby-plugin-image";

// const container = {
//   show: {
//     transition: {
//       staggerChildren: 0.35,
//     },
//   },
// };

// const itemMain = {
//   hidden: { opacity: 0, y: 200 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       ease: [0.6, 0.01, -0.05, 0.95],
//       duration: 0.6,
//     },
//   },
// };

// const Loader = ({ setLoading }) => {
//   return (
//     <motion.div className="loader">
//       <motion.div
//         variants={container}
//         onAnimationComplete={() => setLoading(false)}
//         initial="hidden"
//         animate="show"
//         exit="exit"
//         className="loader-inner"
//       >
//         <motion.div variants={itemMain} className="transition-image">
//           <StaticImage
//             src="../images/pexels-tembela-bohle-1884583.jpg"
//             alt="landing-image"
//             placeholder="blurred"
//             layout="fullWidth"
//             aspectRatio={ 16/ 9 }
//           />
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };
// export default Loader;
