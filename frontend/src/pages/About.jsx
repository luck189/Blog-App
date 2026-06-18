import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <h1 className="text-center text-3xl uppercase font-bold my-8">
        About us
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto my-6 text-center">
        Welcome to CodeCanvas — where logic meets creativity.
        At CodeCanvas, we believe that code is more than just syntax and semicolons — it's an art form.
        This platform is dedicated to developers, learners, and tech enthusiasts who see programming not just as a skill, but as a craft to be honed.
        Whether you're a beginner exploring your first line of code or an experienced developer building complex systems, CodeCanvas is your space to learn, grow, and get inspired.
        We cover everything from programming tutorials, software development tips, and project walkthroughs to thought pieces on the evolving world of technology.
        Every post is written with clarity and purpose, aiming to make concepts accessible, practical, and sometimes even fun. We don't just teach how to code — we show you how to think like a developer.
        CodeCanvas isn't just a blog — it's a canvas where ideas are built, shared, and celebrated.
      </p>
      <div className="flex justify-center px-4 my-6">
        {/* FIX: Changed width="1000px" to standardized Tailwind width layouts */}
        <img src={assets.about} alt="About CodeCanvas" className="w-full max-w-5xl rounded-md shadow-sm" />
      </div>
    </div>
  );
};

export default About;