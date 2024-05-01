import React from "react";
import "./Categories.scss";
import { NavLink } from "react-router-dom";
function Categories() {
  const myCategory =[ "Business", "Entertainment", "Health", "Science", "Sports", "Technology"]
  return (
    <div className="categories">
      <NavLink to={"/"} className={'myCategories-Home'}>General</NavLink>
       {
          myCategory.map((myCategories, index)=>{
             return( 
             <NavLink to={`/${myCategories}`}className={`scroll ${myCategories}`} key={index}> 
             {myCategories}
             </NavLink>)
          })
      }
      
    </div>
  );
}

export default Categories;
