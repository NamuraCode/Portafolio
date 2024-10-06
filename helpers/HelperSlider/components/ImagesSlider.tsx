import React, { useRef, useState } from "react";
import Image from "next/image";

interface ImagesSliderProps {
  sliderImages?: string[];
  isProject?: boolean;
  sliderRef: React.RefObject<HTMLDivElement>;
}

export const ImagesSlider = ({
  sliderImages,
  isProject,
  sliderRef,
}: ImagesSliderProps) => {
  const [sideX, setSideX] = useState(true);
  const sliderImgRef = useRef<HTMLImageElement>(null);
  
  const moveSlider = (index: number) => {
    if(!sliderImgRef.current) return;
    const imageWidth = isProject ? 260 : sliderImgRef.current.width;
    if (!sliderImages) return;
    if (sliderRef.current) {
      if (index < sliderImages.length - 1 && sideX) {
        console.log(index);
        index + 1 == sliderImages.length - 1 && setSideX(false);
        sliderRef.current.scrollTo({
          left: imageWidth * (index + 1),
          behavior: "smooth",
        });
      } else {
        console.log(index);
        index - 1 == 0 && setSideX(true);
        sliderRef.current.scrollTo({
          left: (index - 1) * imageWidth,
          behavior: "smooth",
        });
      }
    }
  };
  return (
    <>
      {sliderImages &&
        sliderImages.map((image, index) => {
          return (
            <Image
              ref={sliderImgRef}
              key={`projectImg${index}`}
              id={`projectImg${index}`}
              src={image}
              width={isProject ? 260 : 448}
              height={isProject ? 200 : 557}
              alt="project"
              onClick={() => moveSlider(index)}
            />
          );
        })}
    </>
  );
};
