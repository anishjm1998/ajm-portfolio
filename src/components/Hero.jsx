import React from 'react';
import { Link } from 'react-router-dom';
import { FaCode, FaDownload, FaLinkedin, FaGithub, FaWordpress, FaEnvelope } from 'react-icons/fa';
import resume from '../assets/ajmresume.pdf';

// Import additional react-icons for decorative elements
import { GiWoodBeam, GiFeather, GiPaperBagFolded } from 'react-icons/gi';

const Hero = () => {
  const socialLinks = [
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/anishjohnm19/' },
    { icon: FaGithub, url: 'https://github.com/anishjm1998' },
    { icon: FaWordpress, url: 'https://jacobeanforlife.wordpress.com/' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#4B3B2F] to-[#3A2F26] text-white relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Background Elements */}
        <div className="absolute top-28 left-24 w-96 h-96 bg-[#F5F3EF]/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-14 right-24 w-80 h-80 bg-[#F5F3EF]/20 rounded-full filter blur-3xl"></div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/3 w-64 h-64 bg-[#F2E8DC]/15 rotate-45 filter blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-[#EAE0D5]/10 rounded-full filter blur-xl"></div>
        <div className="absolute top-1/3 left-1/2 w-60 h-60 bg-[#D8C3A5]/10 rounded-lg filter blur-lg transform -rotate-12"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-40 bg-[#E6DDD0]/15 rounded-full filter blur-2xl"></div>

        {/* Decorative Icons Adjusted */}
        <div className="absolute top-24 right-16 text-[#EAE0D5]/10 text-9xl opacity-20">
          <GiFeather className="transform rotate-45" />
        </div>
        <div className="absolute bottom-24 left-28 text-[#F2E8DC]/10 text-9xl opacity-20">
          <GiWoodBeam className="transform -rotate-12" />
        </div>
        <div className="absolute top-1/2 left-20 text-[#D8C3A5]/10 text-8xl opacity-20">
          <GiPaperBagFolded />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative fade-in">
        {/* Improved Role Tag */}
        <div className="inline-flex items-center justify-center gap-3 mb-8 px-6 py-2 
        border-4 border-[#4B2E1B] text-[#4B2E1B] rounded-full 
        bg-[#EED9C4]/60 shadow-lg backdrop-blur transition-all duration-300 
        font-poppins font-bold text-lg tracking-wide hover:scale-105 hover:shadow-xl">
          <FaCode className="text-[#4B2E1B] text-2xl" />
          <span>Full Stack Developer</span>
        </div>

        {/* Name & Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-16 leading-tight font-poppins">
          Hello, I'm <br className="hidden md:inline" />
          <span className="inline-block text-[#F5F3EF] mt-2">Anish John Moothedam</span>
        </h1>

        {/* Buttons with Reversed Colors */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 text-[#F5F3EF] border-2 border-[#F5F3EF] 
                      rounded-lg bg-transparent font-semibold hover:bg-[#F5F3EF] hover:text-[#4B3B2F] 
                      transition-all duration-300 shadow-lg"
          >
            <FaEnvelope />
            Get in Touch
          </Link>

          <a
            href={resume} // Use the imported file
            download="Anish_John_Moothedam_Resume.pdf" // Optional: Specify the downloaded file name
            className="inline-flex items-center gap-2 px-8 py-4 text-[#F5F3EF] border-2 border-[#F5F3EF] 
             rounded-lg bg-transparent font-semibold hover:bg-[#F5F3EF] hover:text-[#4B3B2F] 
             transition-all duration-300 shadow-lg"
          >
            <FaDownload />
            Download CV
          </a>
        </div>

        {/* Social Links with Hover Effect */}
        <div className="flex items-center justify-center gap-6">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative text-[#F5F3EF] transition-all duration-300 hover:scale-110"
            >
              <div className="absolute inset-0 bg-[#F5E8DA]/30 rounded-full opacity-0 hover:opacity-100 transition-all duration-300"></div>
              <social.icon className="text-3xl relative z-10" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
