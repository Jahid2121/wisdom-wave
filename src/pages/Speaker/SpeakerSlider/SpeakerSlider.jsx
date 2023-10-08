import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const SpeakerSlider = () => {
  return (
    <Swiper
      // install Swiper modules
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <div>
          <img
            className=" mx-auto border rounded-xl border-4 border-orange-500"
            src={
              "https://i.ibb.co/Rh4j7BL/product-school-cd7i9v-YIye-Y-unsplash.jpg"
            }
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className=" mx-auto border rounded-xl border-4 border-orange-500"
            src={
              "https://i.ibb.co/Rh4j7BL/product-school-cd7i9v-YIye-Y-unsplash.jpg"
            }
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <img
            className=" mx-auto border rounded-xl border-4 border-orange-500"
            src={
              "https://i.ibb.co/Rh4j7BL/product-school-cd7i9v-YIye-Y-unsplash.jpg"
            }
          />
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default SpeakerSlider;
