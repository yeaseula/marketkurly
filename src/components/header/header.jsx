import Headlogo from '../../assets/headerlogo.svg'
import SearchIcon from '../../assets/search_icon.svg'
import SmallClose from '../../assets/small_close.svg'
import Mappin from '../../assets/map-pin.svg'
import MappinColor from '../../assets/map-pin-color.svg'
import Heart2 from '../../assets/heart.svg'
import HeartColor from '../../assets/heart-color.svg'
import Cart2 from '../../assets/cart.svg'
import CartColor from '../../assets/cart-color.svg'

import Ham from '../../assets/hamburger.svg'
import HamColor from '../../assets/hamburger-color.svg'
import ArrowS from '../../assets/arrow_small.png'

import './header.scss'
import './Filter.scss'

import {List} from './List.jsx'
import {Filter} from './Filter.jsx'
import {categoryDepth} from './categoryDepth.js';

import {useState} from "react"
import { RiCloseLine } from "@remixicon/react";

function HeaderFc(){

	//Banner Close
	const [Bannerstate, setBannerstate] = useState('show');
	const BannerFnc = (Bannerstate,setBannerstate) => {
		var BannerClass = setBannerstate === 'hidden' ? 'hidden' : Bannerstate;
		return BannerClass
	}

	//Input Search
	const [Keyword,setKeyword] = useState('');
	const [Searchstyle,setSearchstyle] = useState('');

	const InputMove = (Searchstyle,setSearchstyle) => {
		var addClass = setSearchstyle === 'active' ? 'active' : Searchstyle
		return addClass
	}
	const MainSearchFnc = (e) => {
		e.target.value === '' ? setSearchstyle('active-n') : setSearchstyle('active') 
		const Thisvalue = e.target.value;
		setKeyword(Thisvalue)
	}

	const MainCloseBtn = () => {
		setKeyword('');
		setSearchstyle('active-n')
	}

	//Category select
	const [selectedCategory, setSelectedCategory] = useState('vegitable');
	const filteredList = categoryDepth.filter((item)=>item.category === selectedCategory)

	const [Cate,setCate] = useState('category_filter');
	const CategoryStatement = (Cate,setCate) => {
		var CategoryState = setCate === 'category_filter' ? 'category_filter' : Cate;
		return CategoryState
	}
	return (
		<>
			<div className={`line_banner ${BannerFnc(Bannerstate,setBannerstate)}`} onClick={()=>{setBannerstate('hidden')}}>
				<p>지금 가입하고, <span>50% 할인 쿠폰</span> 받아가세요!</p>
				<span className='closing_btn'>
				<RiCloseLine
					size={24}
					color="rgba(255, 255, 255, 0.8)"
					className="closedline"
				/>
				</span>
			</div>
			<div className='header_wrap'>
				<div className="user_menu">
					<ul>
						<li><a href="" className='active'>회원가입</a></li>
						<li><a href="">로그인</a></li>
						<li className='customer_center'><a href="">고객센터 <img src={ArrowS} alt="arr" className='arr'/></a>
							<ul className='customer_center_hidden_menu'>
								<li><a href="">공지사항</a></li>
								<li><a href="">자주하는 질문</a></li>
								<li><a href="">1:1 문의</a></li>
								<li><a href="">대량주문 문의</a></li>
							</ul>
						</li>
					</ul>
				</div>
				<div className="quick_menu">
					<div className='quick_menu_inner'>
						<img src={Headlogo} alt="" />
						<ul>
							<li><a href="" className='active'>마켓컬리</a></li>
							<li><a href="">뷰티컬리</a></li>
						</ul>
						<div className="main_searchbox">
							<input type="text" 
							placeholder='검색어를 입력해주세요' 
							name='search_form' 
							value= {Keyword}
							className='main_search_form' 
							onChange={MainSearchFnc}/>
							<img src={SmallClose} className={`input_close_btn ${InputMove(Searchstyle,setSearchstyle)}`}
							onClick={MainCloseBtn}/>
							<button className='submitbtn'><img src={SearchIcon} alt="" /></button>
						</div>
					</div>
					<div className='header_icon_box'>
						<ul>
							<li>
								<a href="">
									<span>
										<img src={Mappin} alt="map-pin" className='normal_icon'/>
										<img src={MappinColor} alt="map-pin" className='color_icon'/>
									</span>
								</a>
							</li>
							<li>
								<a href="">
									<span>
										<img src={Heart2} alt="heart" className='normal_icon' />
										<img src={HeartColor} alt="heart" className='color_icon'/>
									</span>
								</a>
							</li>
							<li>
								<a href="">
									<span>
										<img src={Cart2} alt="cart" className='normal_icon'/>
										<img src={CartColor} alt="cart" className='color_icon'/>
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className='category_wrap'>
				<div className="category_inner">
					<div className='category_whole'>
						<ul>
							<li>
								<a href="">
									<span className='img'>
										<img src={Ham} alt="hamburger" className='normal_icon'/>
										<img src={HamColor} alt="hamburgerC" className='color_icon'/>
									</span>
									<span>카테고리</span>
									<div className={`${CategoryStatement(Cate,setCate)}`}
									onMouseOver={()=>{setCate('category_filter')}}
									onMouseOut={()=>{setCate('category_filter_out')}}
									>
										<Filter
											setSelectedCategory={setSelectedCategory}
											selectedCategory={selectedCategory}
										/>
										<List filteredList={filteredList} />
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div className='category_detail'>
						<ul>
							<li><a href=""><span>신상품</span></a></li>
							<li><a href=""><span>베스트</span></a></li>
							<li><a href=""><span>알뜰쇼핑</span></a></li>
							<li><a href=""><span>특가혜택</span></a></li>
						</ul>
					</div>
					<div className='category_btn'>
						<a href=""><span>샛별.하루</span> 배송 안내</a>
					</div>
				</div>
			</div>
		</>
	)
}
export default HeaderFc