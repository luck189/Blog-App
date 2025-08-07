import { assets } from "../assets/assets";
const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-3xl uppercase font-bold my-8">Contact</h1>
      <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto my-6">
        {" "}
        We love to hear from you!
        Whether you have a question, feedback, collaboration idea, or just want to say hello — don't hesitate to reach out. At CodeCanvas, we value community and conversation.<br/>
        You can contact us via email at:<br/>
        lakshyaggarwal18sep@gmail.com<br/>
        Or connect with us on social media: <br/>
        LinkedIn: <a href="https://www.linkedin.com/in/lakshyaggarwal189/" target="_blank" rel="noopener noreferrer" className="text-blue-700">https://www.linkedin.com/in/lakshyaggarwal189/</a><br/>
        GitHub: <a href="https://github.com/luck189" target="_blank" rel="noopener noreferrer" className="text-blue-700">https://github.com/luck189</a><br/>
        Looking to contribute or suggest a topic?<br/>
        Use our submission form or drop us a message directly.
      </p>
      <div>
        <img src={assets.contact} alt="" width="1000px" className="m-auto"/>
      </div>
    </div>
  );
};
export default Contact;
