import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSubmission } from "../features/formData/dataSlice";
import FileBase from "react-file-base64";
import axios from "axios";

const Contact = () => {
  const data = useSelector((state) => state.user?.data);
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name || !email || !message || !selectedFile) {
      alert("All fields are required.");
      return;
    }

    const formData = { name, email, message, selectedFile };

    dispatch(addSubmission(formData));

    try {
      // Send the data to the backend (MongoDB)
      const response = await axios.post("https://demo-site-api.vercel.app/", {
        name,
        email,
        message,
        selectedFile,
      });

      console.log("Server Response:", response.data);

      // Send an email using fetch
      const emailResponse = await fetch(
        "https://demo-site-api.vercel.app/api/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (emailResponse.ok) {
        alert("Email sent successfully!");

        // Clear the form inputs
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
        setSelectedFile(null);
      } else {
        alert("Failed to send email. Please try again later.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit the form");

      console.error("Error sending email:", error);
      alert("An error occurred. Please try again.");
    }
  };
  // localStorage.removeItem("formData");

  const handleFileUpload = ({ base64 }) => {
    const validFileTypes = [
      "data:image/jpeg",
      "data:image/png",
      "data:application/pdf",
      "data:application/msword",
      "data:application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    // Extract file type and base64 data
    const fileType = base64.split(",")[0];
    const base64String = base64.split(",")[1];

    // Check if the uploaded file matches any valid file types
    if (!validFileTypes.some((type) => base64.startsWith(type))) {
      alert("Please upload a valid JPG, PNG, PDF, or DOC/DOCX file.");
      return;
    }

    // Calculate file size in KB
    const fileSizeInKB = (base64String.length * 3) / 4 / 1024; // Approximation

    // Set file size limit (e.g., 5 MB = 5120 KB)
    const maxSizeInKB = 5120; // Adjust the size limit as needed

    if (fileSizeInKB > maxSizeInKB) {
      alert(
        `File size exceeds the ${
          maxSizeInKB / 1024
        } MB limit. Please upload a smaller file.`
      );
      return;
    }

    // If valid, set the file
    setSelectedFile(base64);
  };

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
                required
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
                required
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
                required
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="file"
                className="block text-gray-100 dark:text-gray-800 font-medium"
              >
                Resume Below 5MB
              </label>
              <FileBase
                type="file"
                multiple={false}
                onDone={handleFileUpload}
                className="w-full mt-1 px-4 py-2 border border-gray-300 dark:border-gray-800 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gray-300 dark:text-gray-100 text-gray-700 font-bold py-2 px-4 rounded-md hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-900 active:bg-gray-200 dark:active:bg-gray-700 transition"
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
