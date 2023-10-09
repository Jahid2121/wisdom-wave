import { Swiper, SwiperSlide } from "swiper/react";
import { MdLocationOn, MdCalendarToday } from "react-icons/md";

import "swiper/css";

const Slider = ({events}) => {
  // const {id, eventName,date,location,,organizer } = event;
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
      {
        events?.map(event => <SwiperSlide key={event.id}>
          <div>
            <img
              className=" mx-auto w-[600px] h-96 rounded-xl "
              src={
                event.image
              }
            />
            <h2 className="font-bold text-3xl">{event.eventName}</h2>
            <div className="flex gap-9 justify-center">
            <div className="flex items-center">
              <MdLocationOn></MdLocationOn>
            <p>{event.date}</p>
            </div>
            <div className="flex items-center">
              <MdCalendarToday></MdCalendarToday>
            <p>{event.location}</p>
            </div>
            
            </div>
            <p>{event.description}</p>
            <p>{event.organizer}</p>
          </div>
        </SwiperSlide>)
      }


      ...
    </Swiper>
  );
};

export default Slider;
