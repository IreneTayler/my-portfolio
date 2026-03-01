// import { FaFacebookF, FaWhatsapp, FaGithub, FaLinkedinIn } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="w-full bg-black/20 backdrop-blur-xs text-white py-10">
//       <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">

//         {/* Left: Name & Role */}
//         <div className="text-center md:text-left">
//           <h1 className="text-lg font-bold text-[#00ff88]">Samuel Islam</h1>
//           <p className="text-sm text-white/80">Full-Stack Developer</p>
//         </div>

//         {/* Center: Social Icons */}
//         <div className="flex space-x-6 text-white/80 text-xl">
//           <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer"
//              className="hover:text-[#00ff88] transition duration-300">
//             <FaFacebookF />
//           </a>
//           <a href="https://wa.me/8801320694376" target="_blank" rel="noopener noreferrer"
//              className="hover:text-[#00ff88] transition duration-300">
//             <FaWhatsapp />
//           </a>
//           <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
//              className="hover:text-[#00ff88] transition duration-300">
//             <FaGithub />
//           </a>
//           <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
//              className="hover:text-[#00ff88] transition duration-300">
//             <FaLinkedinIn />
//           </a>
//         </div>

//         {/* Right: Copyright */}
//         <div className="text-center md:text-right text-white/70 text-sm">
//           © {new Date().getFullYear()} Samuel Islam. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;













"use client";

import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full bg-black/30 backdrop-blur-xs border-t border-[#00ff88]/30 text-white py-10 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12">
        
        {/* Left: Name & Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
          <h2 className="lg:text-2xl text-xl font-semibold text-[#00ff88]/80">Irene Tayler</h2>
          <p className="text-gray-300 text-sm">Full-Stack Developer</p>
        </motion.div>

        {/* Middle: Social Icons */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center space-x-4 mt-5 md:mt-0"
        >
          <a
            href="https://github.com/IreneTayler/"
            target="_blank"
            className="p-2 border-2 border-[#016630] rounded-lg hover:bg-[#005f5a] text-white transition-all duration-300 text-lg"
          >
            <FaGithub size={24}/>
          </a>
          <a
            href="https://www.linkedin.com/in/Irene-tayler/"
            target="_blank"
            className="p-2 border-2 border-[#016630] rounded-lg hover:bg-[#005f5a] text-white transition-all duration-300 text-lg"
          >
            <FaLinkedin size={24}/>
          </a>
          <a
            href="https://www.facebook.com/share/1EvVk8tm8E/"
            target="_blank"
            className="p-2 border-2 border-[#016630] rounded-lg hover:bg-[#005f5a] text-white transition-all duration-300 text-lg"
          >
            <FaFacebook size={24}/>
          </a>
          <a
            href="https://wa.me/8801320694376"
            target="_blank"
            className="p-2 border-2 border-[#016630] rounded-lg hover:bg-[#005f5a] text-white transition-all duration-300 text-lg"
          >
            <FaWhatsapp size={24}/>
          </a>
        </motion.div> */}

      </div>

      {/* Bottom: Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center text-gray-400 text-sm mt-6 border-t border-[#00ff88]/20 pt-4"
      >
        © {new Date().getFullYear()} Irene Tayler — All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;

