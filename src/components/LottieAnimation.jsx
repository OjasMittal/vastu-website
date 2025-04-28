import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import Lottie from "lottie-react";
import animationData from "../assets/Animation - 1745760370098.json"; 

function LottieAnimation() {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.3,
  });

  const lottieRef = useRef();
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout;

    const handleScroll = () => {
      setIsScrolling(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (lottieRef.current) {
      if (inView && isScrolling) {
        lottieRef.current.play();
      } else {
        lottieRef.current.pause();
      }
    }
  }, [inView, isScrolling]);

  return (
    <div ref={ref} className="flex justify-center items-center my-12">
      <div className="w-full max-w-md">
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={true}
          autoplay={false} // important: no autoplay!
        />
      </div>
    </div>
  );
}

export default LottieAnimation;
