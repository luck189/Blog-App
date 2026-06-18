import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-3xl uppercase font-bold my-8">Contact</h1>
      <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto my-6 text-center">
        We love to hear from you!
        Whether you have a question, feedback, collaboration idea, or just want to say hello — don't hesitate to reach out. At CodeCanvas, we value community and conversation.<br/>
        You can contact us via email at:<br/>
        <span className="font-semibold text-gray-900">lakshyaggarwal18sep@gmail.com</span><br/>
        Or connect with us on social media: <br/>
        LinkedIn: <a href="https://www.linkedin.com/in/lakshyaggarwal189/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">https://www.linkedin.com/in/lakshyaggarwal189/</a><br/>
        GitHub: <a href="https://github.com/luck189" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">https://github.com/luck189</a><br/><br/>
        Looking to contribute or suggest a topic?<br/>
        Use our submission form or drop us a message directly.
      </p>
      <div className="flex justify-center px-4 my-6">
        {/* FIX: Changed width="1000px" to standardized Tailwind width layouts */}
        <img src={assets.contact} alt="Contact Us" className="w-full max-w-5xl rounded-md shadow-sm" />
      </div>
    </div>
  );
};
export default Contact;