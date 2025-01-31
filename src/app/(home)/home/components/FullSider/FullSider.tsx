import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type FullSiderProps = { data: never[] };

function FullSider({ data }: FullSiderProps) {
  return (
    <Swiper
      spaceBetween={1}
      slidesPerView={1}
      rewind={true}
      navigation={true}
      loop={true}
      autoplay={{ delay: 4000, disableOnInteraction: false }}
      modules={[Navigation, Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {data?.map(
        (slider: { image: string | undefined; title: string | undefined }) => {
          return (
            <SwiperSlide>
              <div className="bg-orange-500">
                <img src={slider?.image} alt={slider?.title} />
              </div>
            </SwiperSlide>
          );
        }
      )}
    </Swiper>
  );
}

export default FullSider;
