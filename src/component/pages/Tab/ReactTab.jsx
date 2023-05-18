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




          {/* <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <h2>Content 1</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
              vel voluptatum?
            </p>
          </div>
  
          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <h2>Content 2</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              voluptatum qui adipisci.
            </p>
          </div>
  
          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <h2>Content 3</h2>
            <hr />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
              nostrum rerum laudantium totam unde adipisci incidunt modi alias!
              Accusamus in quia odit aspernatur provident et ad vel distinctio
              recusandae totam quidem repudiandae omnis veritatis nostrum
              laboriosam architecto optio rem, dignissimos voluptatum beatae
              aperiam voluptatem atque. Beatae rerum dolores sunt.
            </p>
          </div> */}
        </div>
      </div>
    );
};

export default ReactTab;