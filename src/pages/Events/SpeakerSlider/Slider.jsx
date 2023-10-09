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
          <div className="max-w-2xl shadow-xl mx-auto">
            <img
              className=" mx-auto w-[600px] h-96 rounded-xl "
              src={
                event.image
              }
            />
            <h2 className="font-bold my-3 text-3xl text-custom-orange-shade">{event.eventName}</h2>


            <div className="flex gap-9 my-3 justify-center">

            <div className="flex gap-1 items-center">
              <MdLocationOn></MdLocationOn>
            <p>{event.date}</p>
            </div>

            <div className="flex gap-1 items-center ">
              <MdCalendarToday></MdCalendarToday>
            <p>{event.location}</p>
            </div>
            
            </div>
            <p className="mx-32 text-left my-4">{event.description}</p>
            <h3 className="font-medium text-sm">Organizer</h3>
            <h3 className="font-bold pb-7 mt-1 normal-case text-xl">Wisdom<span className="text-custom-Pink">Wave</span></h3>
          </div>
        </SwiperSlide>)
      }


      ...
    </Swiper>
  );
};

export default Slider;
