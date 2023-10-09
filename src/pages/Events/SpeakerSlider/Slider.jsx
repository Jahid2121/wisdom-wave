import { Swiper, SwiperSlide } from "swiper/react";
import { MdLocationOn, MdCalendarToday } from "react-icons/md";
import "swiper/css";
import '../SpeakerSlider/slider.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Slider = ({ events }) => {
  return (
    <Swiper className="static"
      // install Swiper modules
      spaceBetween={50}
      slidesPerView={2}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {events?.map((event) => (
        <SwiperSlide key={event.id}>
          <div className="max-w-2xl shadow-xl mx-auto">
            <img
              className=" mx-auto w-[600px] h-96 rounded-xl "
              src={event.image}
            />
            <h2 className="font-bold my-3 text-3xl text-custom-orange-shade">
              {event.eventName}
            </h2>

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
            <div className="text-center">
            <h3 className="font-medium text-sm">Organizer</h3>
            <h3 className="font-bold pb-7 mt-1 normal-case text-xl">
              Wisdom<span className="text-custom-Pink">Wave</span>
            </h3>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className=" ">
        <div style={{}} className="swiper-button-next  mr-96"></div>
        <div className="swiper-button-prev"></div>
        </div>

        <div className="text-4xl">
        ...
        </div>
    </Swiper>
  );
};

export default Slider;
