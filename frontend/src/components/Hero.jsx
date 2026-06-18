import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="my-6 flex justify-center items-center px-4">
      <img 
        src={assets.hero} 
        alt="CodeCanvas Banner Showcase" 
        className="w-full max-w-5xl rounded-xl shadow-sm object-cover" 
      />
    </div>
  );
};

export default Hero;