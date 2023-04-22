import React from 'react';
import NavLogout from './NavLogout'
import Cards from '../Components/Cards';
import Header from '../Components/Header';
import FilterHeader from '../Components/FilterHeader';
function OrderPage(){
 return(
    <div>
      <NavLogout/>
       <Header/>
       <FilterHeader/>
       <Cards/>
        
  </div>

 )
}
export default OrderPage;