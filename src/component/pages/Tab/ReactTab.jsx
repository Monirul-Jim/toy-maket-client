import React, { useEffect, useState } from 'react';
import './ReactTab.css'
import ReactTabCard from './ReactTabCard/ReactTabCard';
const ReactTab = () => {
    const [toggleState, setToggleState] = useState(1);
    const [categories,setCategories]=useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/category-data/${toggleState}`)
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[toggleState])
    const toggleTab = (index) => {
        setToggleState(index);
      };
    return (
        <div className="container">
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs text-xl" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Sports Car
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs  text-xl" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Mini Fire Truck
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs  text-xl" : "tabs"}
            onClick={() => toggleTab(3)}
          >
           Police Car
          </button>
        </div>
  
        <div className="content-tabs">
        {categories.map((category, index) => (
          <div key={index}  className={toggleState === index + 1 ? "content active-content" : "content"}>
           <ReactTabCard category={category}></ReactTabCard>
          </div>
        ))}
        </div>
      </div>
    );
};

export default ReactTab;