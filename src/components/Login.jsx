import { useDispatch } from "react-redux";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { setUser } from "../features/formData/authSlice";
import Header from "./Header";
import { toast } from "react-toastify";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleButtonClick = (e) => {
    e.preventDefault();

    const message = checkValidData(
      nameRef?.current?.value,
      emailRef?.current?.value,
      passwordRef?.current?.value
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: nameRef?.current?.value,
          })
            .then(() => {
              dispatch(
                setUser({
                  uid: user.uid,
                  email: user.email,
                  displayName: user.displayName || "Your Display Name Here",
                })
              );

              toast.success("User Signed Up");

              navigate("/main");
            })
            .catch((error) => {
              toast.error("Error updating profile:", error);
              setErrorMessage(`Error updating profile: ${error.message}`);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
          toast.error(errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        emailRef?.current?.value,
        passwordRef?.current?.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          dispatch(
            setUser({
              uid: user.uid,
              email: user.email,
              displayName: user.displayName || "",
            })
          );
          toast.success("User Signed In");
          navigate("/main");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          toast.error(errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm((prev) => !prev);
    setErrorMessage("");
  };

  return (
    <>
      <Header
        isSignInForm={isSignInForm}
        toggleSignInForm={() => setIsSignInForm((prev) => !prev)}
      />
      <div className="min-h-screen flex items-center justify-center bg-gray-400 dark:bg-gray-800 transition-colors duration-200">
        <form
          className="w-full max-w-md p-8 bg-gray-600 dark:bg-gray-900 text-gray-800 dark:text-white rounded-2xl shadow-lg transition-colors duration-300"
          onSubmit={handleButtonClick}
        >
          <h1 className="text-center font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={nameRef}
              type="text"
              placeholder="Full Name"
              className="bg-gray-200 dark:bg-gray-700 p-4 my-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
            />
          )}

          <input
            ref={emailRef}
            type="email"
            placeholder="Email Address"
            className="bg-gray-200 dark:bg-gray-700 p-4 my-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
          />

          <input
            ref={passwordRef}
            type="password"
            placeholder="Password"
            className="bg-gray-200 dark:bg-gray-700 p-4 my-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400"
          />

          {/* {errorMessage && (
            <p className="text-red-500 text-sm text-center">{errorMessage}</p>
          )} */}

          <button
            type="submit"
            className="p-4 my-6 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 rounded-lg w-full"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="text-sm text-center text-gray-300 dark:text-gray-300 hover:underline cursor-pointer"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to the platform? Sign Up Now"
              : "Already have an account? Sign In Now."}
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
