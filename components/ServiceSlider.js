import { Swiper, SwiperSlide } from "swiper/react";
//imoprt swiper
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: "Branding",
    description: "Enhance your brand's reach and impact through our tailored digital marketing solutions.",
  },
  {
    icon: <RxPencil2 />,
    title: "Design",
    description: "We will create your web design for businees and others purpose .Highly attractive and eye cathy.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description: "I develop any website which template you want with responsiveness and rank it on google.",
  },
  {
    icon: <RxReader />,
    title: "Copywriting",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    icon: <RxRocket />,
    title: "SEO",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={{ FreeMode, Pagination }}
      className="h-[240px] sm:h-[340px] "
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300 ">
              {/* icon */}
              <div className="text-4xl text-accent">{item.icon} </div>
              {/* title and description */}
              <div className="mb-8 ">
                <div className="mb-2 text-lg">{item.title} </div>
                <p className="max-w-[350px] leading-normal">{item.description} </p>
              </div>
              {/* arrow */}
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
