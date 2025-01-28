import { useState, useRef, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);

  const images = [
    "https://t3.ftcdn.net/jpg/05/59/87/12/360_F_559871209_pbXlOVArUal3mk6Ce60JuP13kmuIRCth.jpg",
    "https://t4.ftcdn.net/jpg/05/79/95/01/360_F_579950180_R9xGY9hpwJl5P6D3cs2FfavNK7sM3sfG.jpg",
    "https://ennisco.com/wp-content/uploads/2023/12/CEO-square.jpg",
    "https://img.stablecog.com/insecure/1920w/aHR0cHM6Ly9iLnN0YWJsZWNvZy5jb20vZGYzMTNkM2QtZTA2MS00ZjcwLWEyMjgtNTU1OGFhODY4OTczLmpwZWc.webp",
  ];
  const handleStartDrag = (e) => {
    setIsDragging(true);
    setStartX(e.clientX || e.touches[0].clientX);
    setTranslateX(0);
  };

  const handleDragging = (e) => {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    setTranslateX(currentX - startX);
  };

  const handleEndDrag = () => {
    setIsDragging(false);
    if (translateX > 50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (translateX < -50 && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    setTranslateX(0);
  };

  useEffect(() => {
    const handleWindowMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
        setTranslateX(0);
      }
    };

    window.addEventListener("mouseup", handleWindowMouseUp);
    window.addEventListener("touchend", handleWindowMouseUp);

    return () => {
      window.removeEventListener("mouseup", handleWindowMouseUp);
      window.removeEventListener("touchend", handleWindowMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="w-full my-20 py-10 px-8 bg-inherit overflow-hidden relative">
      <div
        ref={containerRef}
        className="flex lg:mx-[30%]"
        style={{
          transform: `translateX(calc(-${
            currentIndex * 100
          }% + ${translateX}px))`,
          transition: isDragging ? "none" : "transform 0.3s ease-in-out",
          cursor: isDragging ? "grabbing" : "grab",
        }}
        onMouseDown={handleStartDrag}
        onMouseMove={handleDragging}
        onMouseUp={handleEndDrag}
        onMouseLeave={handleEndDrag}
        onTouchStart={handleStartDrag}
        onTouchMove={handleDragging}
        onTouchEnd={handleEndDrag}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-[50vh] flex justify-center items-center cursor-pointer object-cover"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-3/4 h-full rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white p-2 rounded-full shadow-md"
        onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white p-2 rounded-full shadow-md"
        onClick={() =>
          currentIndex < images.length - 1 && setCurrentIndex(currentIndex + 1)
        }
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
