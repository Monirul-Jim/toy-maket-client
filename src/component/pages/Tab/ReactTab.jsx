import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ReactTabCard from './ReactTabCard/ReactTabCard';
const ReactTab = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);
  const [categories, setCategories] = useState([])
  useEffect(() => {
    fetch(`https://toy-shop-phi.vercel.app/category-data/${selectedCategoryId}`)
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [selectedCategoryId])
  const handleTabClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };
  return (
    <div className='mt-14'>
      <h1 className='text-2xl font-bold text-center'>All Category Of Car You Find Here</h1>
      <Tabs>
        <TabList>
          <Tab onClick={() => handleTabClick(1)} >Sports Car</Tab>
          <Tab onClick={() => handleTabClick(2)}>Fire Truck</Tab>
          <Tab onClick={() => handleTabClick(3)}>Police Car</Tab>
        </TabList>


        <div className=" grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-16">
        {categories.map((category, index) => (
          <div key={index}  className={selectedCategoryId === index + 1 ? "content active-content" : "content"}>
           <ReactTabCard category={category}></ReactTabCard>
          </div>
        ))}
        </div> 
      </Tabs>
    </div>
  );
};

export default ReactTab;