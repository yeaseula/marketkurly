import icon1 from '../../categoryIcons/icon1.png'
import icon2 from '../../categoryIcons/icon2.png'
import icon3 from '../../categoryIcons/icon3.png'
import icon4 from '../../categoryIcons/icon4.png'

import './Filter.scss'

export const Filter = ({setSelectedCategory,selectedCategory}) => {
    return (
        <div>
            <div className="filter-container">
                <button 
                    type="button" 
                    className={`${"vegitable"} ${
                        selectedCategory === "vegitable" ? "filter-active" : ""
                    }`}
                    onMouseOver={()=> setSelectedCategory("vegitable")}
                > <img src={icon1} alt="icon1" /> <span>채소</span>
                </button>
                <button 
                    type="button" 
                    className={`${"fruit"} ${
                        selectedCategory === "fruit" ? "filter-active" : ""
                    }`}
                    onMouseOver={()=> setSelectedCategory("fruit")}
                > <img src={icon2} alt="icon2" /> <span>과일·견과·쌀 </span>
                </button>
                <button 
                    type="button" 
                    className={`${"seafood"} ${
                        selectedCategory === "seafood" ? "filter-active" : ""
                    }`}
                    onMouseOver={()=> setSelectedCategory("seafood")}
                    ><img src={icon3} alt="icon3" /> <span>수산·해산·건어물</span> 
                </button>
                <button 
                    type="button" 
                    className={`${"processed"} ${
                        selectedCategory === "processed" ? "filter-active" : ""
                    }`}
                    onMouseOver={()=>setSelectedCategory("processed")}
                    ><img src={icon4} alt="icon4" /> <span>정육·가공육·계란</span> 
                </button>
        </div>
    </div>
    );
};