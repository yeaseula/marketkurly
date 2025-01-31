import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

import {sliderdata} from './Swiper.js'
import { useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Swiper.scss'

function SwiperMain () {
    let [imagelist] = useState(sliderdata)
    return (
        <>
        <Swiper
        pagination={{
            type: 'fraction',
        }}
        navigation={true}
        rewind={true}
        modules={[Pagination, Navigation, Autoplay]}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        loop={true}
        className="mySwiper"
        >
        {
            imagelist.map((a,i)=>{
                return (
                    <SwiperSlide>
                        <SwiperIndi imagelist={imagelist[i]}></SwiperIndi>
                    </SwiperSlide>
                )
            })
        }
        </Swiper>
        </>

    )
}

function SwiperIndi (props){
    return (
        <>
        <img src={'sliderimage/slide'+props.imagelist.id+props.imagelist.src} alt="a" />
        </>
    )
}

export default SwiperMain