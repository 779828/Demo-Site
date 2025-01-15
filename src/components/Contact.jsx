import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSubmission } from "../features/formData/dataSlice";
import axios from "axios";

const Contact = () => {
  const data = useSelector((state) => state.user?.data);
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const submitForm = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    const formData = { name, email, message };

    dispatch(addSubmission(formData));

    // Send the data to the backend (MongoDB)
    try {
      const response = await axios.post("https://demo-site-api.vercel.app/", {
        name,
        email,
        message,
      });

      console.log("Server Response:", response.data);
      alert("Form submitted successfully!");

      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form");
    }
  };

  // localStorage.removeItem("formData");

  return (
    <section className="bg-gray-300 py-12 dark:bg-gray-800">
      <div className="container mx-auto px-6 mt-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6 dark:text-gray-100">
          Contact Us
        </h2>
        <p className="text-center text-gray-700 mb-12 dark:text-gray-300">
          Have questions or need help? Reach out to us, and we’ll get back to
          you shortly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Home Address
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Mumbai, Maharashtra, India
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Phone
              </h3>
              <p className="text-gray-700 dark:text-gray-300">+91 7798281079</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                Email
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                shashankbmusale07@gmail.com
              </p>
            </div>
          </div>

          <form
            className="bg-gray-600 dark:bg-gray-300 shadow-lg rounded-lg p-6 space-y-4 "
            onSubmit={submitForm}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-100 font-medium dark:text-gray-800"
              >
                Full Name
              </label>
              <input
                ref={nameRef}
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-100 dark:text-gray-800 font-medium"
              >
                Email Address
              </label>
              <input
                ref={emailRef}
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-100 dark:text-gray-800 font-medium"
              >
                Message
              </label>
              <textarea
                ref={messageRef}
                id="message"
                rows="4"
                placeholder="Write your message"
                className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-300 dark:bg-gray-700 dark:text-gray-100 text-gray-700 font-bold py-2 px-4 rounded-md hover:bg-gray-100 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
