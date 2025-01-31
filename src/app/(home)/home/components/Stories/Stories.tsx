import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Story from "./Story";

type Props = {};

function Stories({}: Props) {
  return (
    <div className=" p-2 pt-4 mx-10">
      <ul className="flex gap-x-3">
        <Swiper
          spaceBetween={1}
          //   slidesPerView={12}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          breakpoints={{
            430: {
              slidesPerView: 3,
            },
            576: {
              // width: 576,
              slidesPerView: 6,
            },
            768: {
              // width: 768,
              slidesPerView: 12,
            },
          }}
        >
          <SwiperSlide>
            <Story
              imageUrl="https://dkstatics-public.digikala.com/digikala-bellatrix/e4de6f360fcda4f501f21419ba40a100460740cd_1733129128.png"
              title="test"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Story
              imageUrl="https://dkstatics-public.digikala.com/digikala-bellatrix/e4de6f360fcda4f501f21419ba40a100460740cd_1733129128.png"
              title="test"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Story
              imageUrl="https://dkstatics-public.digikala.com/digikala-bellatrix/e4de6f360fcda4f501f21419ba40a100460740cd_1733129128.png"
              title="test"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Story
              imageUrl="https://dkstatics-public.digikala.com/digikala-bellatrix/e4de6f360fcda4f501f21419ba40a100460740cd_1733129128.png"
              title="test"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Story
              imageUrl="https://dkstatics-public.digikala.com/digikala-bellatrix/e4de6f360fcda4f501f21419ba40a100460740cd_1733129128.png"
              title="test"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Story
              imageUrl="https://dkstatics-public.digikala.com/digikala-bellatrix/e4de6f360fcda4f501f21419ba40a100460740cd_1733129128.png"
              title="test"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Story
              imageUrl="https://dkstatics-public.digikala.com/digikala-bellatrix/e4de6f360fcda4f501f21419ba40a100460740cd_1733129128.png"
              title="test"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Story
              imageUrl="https://dkstatics-public.digikala.com/digikala-bellatrix/e4de6f360fcda4f501f21419ba40a100460740cd_1733129128.png"
              title="test"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Story
              imageUrl="https://dkstatics-public.digikala.com/digikala-bellatrix/e4de6f360fcda4f501f21419ba40a100460740cd_1733129128.png"
              title="test"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Story
              imageUrl="https://dkstatics-public.digikala.com/digikala-bellatrix/e4de6f360fcda4f501f21419ba40a100460740cd_1733129128.png"
              title="test"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Story
              imageUrl="https://dkstatics-public.digikala.com/digikala-bellatrix/e4de6f360fcda4f501f21419ba40a100460740cd_1733129128.png"
              title="test"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Story
              imageUrl="https://dkstatics-public.digikala.com/digikala-bellatrix/e4de6f360fcda4f501f21419ba40a100460740cd_1733129128.png"
              title="test"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Story
              imageUrl="https://dkstatics-public.digikala.com/digikala-bellatrix/e4de6f360fcda4f501f21419ba40a100460740cd_1733129128.png"
              title="test"
            />
          </SwiperSlide>
        </Swiper>
      </ul>
    </div>
  );
}

export default Stories;
