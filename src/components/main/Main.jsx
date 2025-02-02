import './Main.scss'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useRef, useState } from 'react';

//data
import { maindata } from './maindata.js'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//Remix Icon
import { RiArrowRightSLine } from "@remixicon/react";
import { RiArrowLeftSLine } from "@remixicon/react";
import {RiMessage3Line} from '@remixicon/react'
import {RiShoppingCartLine} from '@remixicon/react'

function MainContents () {
    let [maindata1] = useState(maindata) // section1
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <section id="section1" className="section">
            <TitleSection1 />
            <div className='Swiper_wrap'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    centeredSlides={false}
                    slidesPerGroup={1}
                    watchOverflow={true}
                    breakpoints={{
                        500: {
                            slidesPerView: 4,
                            slidesPerGroup: 4,
                        },
                    }}
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    loop={false}
                    className="section1Swiper"
                    >
                    {
                        maindata1.map((a,i)=>{
                            return (
                                <SwiperSlide key={a.id}>
                                    <Item1 maindata1={maindata1[i]}></Item1>
                                </SwiperSlide>
                            )
                        })
                    }
                    <SwiperSlide>
                        <div className='last_slidePage'>
                            <button className='all_view_btn'></button>
                            <span>전체보기</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div className="swiper-navigation">
                    <button className='swiper_prev' ref={prevRef}></button>
                    <button className='swiper_next' ref={nextRef}></button>
                </div>
            </div>
        </section>
    )
}

function TitleSection1(){
    return (
        <div>
            <a href='#' className='section_title'>
                <span>🛒지금 가장 많이 담는 특가</span>
                <RiArrowRightSLine
                    size={40}
                    color="#424242"
                    className="arrow"
                />
            </a>
            <p className='section_title_sub'>컬리 추천 특가템 최대 50%</p>
        </div>
    )
}

function Item1(props){
    let Coupon1on = props.maindata1.Coupon === true ? 'on' : '';
    let Coupon2on = props.maindata1.Coupon2 === true ? 'on' : '';
    let OriginPrice = props.maindata1.originPrice.toLocaleString();
    let totalPrice = props.maindata1.originPrice - (props.maindata1.originPrice * (props.maindata1.salePer / 100));
    let totalPrice2 = totalPrice.toLocaleString();
    return (
        <div>
            <div className='img_box'>
                <span className={`saletag ${Coupon1on}`}>+ 15% 쿠폰</span>
                <img src="/maindata/flag2.png" className={`coupone2 ${Coupon2on}`}/>
                <img src={props.maindata1.imgsrc} className='product_img' />
            </div>
            <div className='cart_btn'>
                <RiShoppingCartLine
                    size={16}
                    color='#424242'
                    className='carticon'
                />
                <span>담기</span>
            </div>
            <div className='contents_box'>
                <p className='item_title'>{props.maindata1.title}</p>
                <p className='origin_price'>{OriginPrice}원</p>
                <div className='real_price'>
                    <span className='saletag'>{props.maindata1.salePer}%</span>
                    <span className='total_price'>{totalPrice2}원~</span>
                </div>
                <p className='comment_count'>
                    <RiMessage3Line
                        size={16}
                        color="rgb(167, 178, 188)"
                        className="messageicon"
                    />
                    <span>{props.maindata1.Comment}</span>
                </p>
            </div>
        </div>
    )
}

export default MainContents