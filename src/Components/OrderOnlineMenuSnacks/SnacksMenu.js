import React,{useState,useEffect,useMemo} from 'react';
import ProductSnacks from './ProductSnacks';
import { connect } from 'react-redux';
import {loadCurrentItem} from "../../redux/Shopping/shopping.action"
import { Link } from 'react-router-dom';


const SnacksMenu = ({snacks}) => {
return (
     
    <div className='text-center bg-gray-100  pt-[2rem]  text-[25px] font-semibold'>SNACKS MENU
        <div className="grid pb-12 lg:px-[60px] grid-cols lg:grid-cols-4 md:grid-cols-2  md:px-[20px] grid-cols gap-x-[2rem] gap-y-12 pt-3 m-12  ">
                {
                    snacks?.map((prod) => (
                    <ProductSnacks key={prod.id} productDataSnacks={prod}/>
                        )
                    )
                }
                
        </div>
    </div>
   
)

}


    const mapStateToProps = (state,dispatch) => {
    console.log(state);
    return{
        snacks: state.shop.snacks,

    }
    }


    export default connect(mapStateToProps)(SnacksMenu);