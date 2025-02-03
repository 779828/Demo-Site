import { useEffect, useState } from "react";
import About from "./About";
import Bento from "./Bento";
import Carousel from "./Carousel";
import Hero from "./Hero";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

const Main = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken(/* forceRefresh */ true);
        setToken(token);
        // console.log("Firebase ID Token:", token);
      } else {
        setToken(null);
      }
    });

    return () => unsubscribe(); // Cleanup listener on unmount
  }, [auth]);

  return (
    <div>
      <Hero />
      <Bento />
      <About />
      <Carousel />
    </div>
  );
};

export default Main;
