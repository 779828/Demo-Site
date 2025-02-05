import { toast } from "react-toastify";

export const checkValidData = (name, email, password) => {
  const isNameValid = /^[A-Za-z\s]{2,}$/.test(name);

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isNameValid)
    return toast.error(
      `Name is not valid! Please took reference to this John Doe`
    );
  if (!isEmailValid)
    return toast.error(
      `Email ID is not valid! Please took reference to this John@gmail.com`
    );
  if (!isPasswordValid)
    return toast.error(
      `Password is not valid! Please took reference to this Pass@1234`
    );

  return null;
};
