import './Main.scss'


import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { useRef, useState, useEffect } from 'react';

//data
import { maindata } from './maindata.js'
import { LowPrice } from './maindata.js'

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
    let [lowPrice] = useState(LowPrice) // section2
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    return (
        <>
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
                        maindata1.map((it,i)=>{
                            return (
                                <SwiperSlide key={it.id}>
                                    <Item1 key={it.id} {...it}></Item1>
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
        <section id="section2" className='section'>
            <div className='section_inner_flex'>
                <TitleSection2 />
                <div className="item">
                {
                    lowPrice.map((it,i)=>{
                        return (
                            <Item1 key={it.id} {...it}/>
                        )
                    })
                }
                </div>
            </div>
        </section>
        </>
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
function TitleSection2(){
    const [time, setTime] = useState(new Date());

    let Today = new Date()

    let Tomorrow = new Date();
    Tomorrow.setDate(Today.getDate() + 1);
    Tomorrow.setHours(0)
    Tomorrow.setMinutes(59)
    Tomorrow.setSeconds(59)

    let TodaySeconds = Today.getTime()
    let TomorrowSeconds = Tomorrow.getTime()
    let CountReady = (TomorrowSeconds - TodaySeconds) / 1000


	if (CountReady < 61) {
        return '00:' + addZero(CountReady)
	}

	var hours = Math.floor(CountReady/3600)
	var mins = Math.floor((CountReady - hours*3600)/60)
	var secs = CountReady - hours*3600 - mins*60
	var Countdown = addZero(hours) + ' : ' + addZero(mins) + ' : ' + addZero(secs)
    
	function addZero(num) {
		return ((num < 10) ? '0' : '') + num
	}

    useEffect(() => {
        const count = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return (() => clearInterval(count))}, []);
    return (
        <div>
            <a href='#' className='section_title'>
                <span>✨최저가 도전!</span>
            </a>
            <div className="setTime">
                <div className="clock_icon">
                    <div className="bar_fix"></div>
                    <div className="bar">
                        <div>
                            <div className="bar_fix"></div>
                            <div className="bar_move"></div>
                        </div>
                    </div>
                </div>
                {Countdown}
            </div>
            <p className='section_title_sub2'>망설이면 늦어요!</p>
        </div>
    )
}

function Item1(props){

    var CategoryType = props.category
    if(CategoryType === 'maindata') {
        var CouponText = '+ 15% 쿠폰'
    } else if(CategoryType === 'lowprice') {
        var CouponText = '주말 특가'
    }

    let Coupon1on = props.Coupon === true ? 'on' : ''
    let Coupon2on = props.Coupon2 === true ? 'on' : ''

    let ImgRoot =props.imgsrc
    let Descript = props.descript
    let SalePer = props.salePer
    let Title = props.title 
    let OriginPrice = props.originPrice.toLocaleString()
    let totalPrice = Math.round(props.originPrice - (props.originPrice * (SalePer / 100)));
    let totalPrice2 = totalPrice.toLocaleString();


    return (
        <div>
            <ImgBox
            Coupon1on={Coupon1on} Coupon2on={Coupon2on} CouponText={CouponText} ImgRoot={ImgRoot}
            />
            <CartBtn />
            <div className='contents_box'>

                <PriceType CategoryType={CategoryType} Title={Title} Descript={Descript} OriginPrice={OriginPrice} totalPrice2={totalPrice2} SalePer={SalePer}/>

                <Comment props={props}/>
            </div>
        </div>
    )
}


//common
const ImgBox = ({Coupon1on,Coupon2on,CouponText,ImgRoot}) => {
    return (
        <div className='img_box'>
            <span className={`saletag ${Coupon1on}`}>{CouponText}</span>
            <img src="/maindata/flag2.png" className={`coupone2 ${Coupon2on}`}/>
            <img src={ImgRoot} className='product_img' />
        </div>
    )
}

const CartBtn = () => {
    return (
        <div className='cart_btn'>
            <RiShoppingCartLine
                size={16}
                color='#424242'
                className='carticon'
            />
            <span>담기</span>
        </div>
    )
}

const PriceType = ({CategoryType,Title,Descript,SalePer,OriginPrice,totalPrice2}) => {
    if(CategoryType === 'maindata') {
        return PriceType1({Title,SalePer,OriginPrice,totalPrice2})
    } else if(CategoryType === 'lowprice') {
        return PriceType2({Title,Descript,SalePer,OriginPrice,totalPrice2})
    }
}

const PriceType1 = ({Title,SalePer,OriginPrice,totalPrice2}) => {
    return (
        <>
            <p className='item_title'>{Title}</p>
            <p className='origin_price'>{OriginPrice}원</p>
            <div className='real_price'>
                <span className='saletag'>{SalePer}%</span>
                <span className='total_price'>{totalPrice2}원~</span>
            </div>
        </>
    )
}

const PriceType2 = ({Title,Descript,SalePer,OriginPrice,totalPrice2}) =>{
    return (
        <>
            <p className='item_descript'>{Descript}</p>
            <p className='item_title'>{Title}</p>
            <div className='real_price'>
                <span className='saletag'>{SalePer}%</span>
                <span className='total_price'>{totalPrice2}원~</span>
                <span className='origin_price'>{OriginPrice}원</span>
            </div>
        </>
    )
}

function Comment({props}) {
    return (
        <p className='comment_count'>
            <RiMessage3Line
                size={16}
                color="rgb(167, 178, 188)"
                className="messageicon"
            />
            <span>{props.Comment}</span>
        </p>
    )
}

export default MainContents