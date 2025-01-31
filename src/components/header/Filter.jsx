import './Filter.scss'

import {useState} from "react"
import {categorydata} from './category.js'

export const Filter = ({selectedCategory,setSelectedCategory}) => {

    let [Categorydata] = useState(categorydata);

    return (
        <div>
            <div className="filter-container">
                {
                    Categorydata.map((it)=>{
                        return (
                            <button 
                                key={it.id} 
                                type="button" 
                                onMouseOver={()=>{setSelectedCategory(it.category)}}
                                className={`${selectedCategory === it.category ? "filter-active" : ""}`}
                            >
                            <img src={'categoryIcons/icon'+it.id+'.png'} alt={it.icon} className='normalicon'/>
                            <img src={'categoryIcons/icon'+it.id+'-color.png'} alt={it.iconhover} className='hovericon'/> 
                            <span>{it.title}</span>
                        </button>
                        )
                    })
                }
        </div>
    </div>
    );
};