import React,{useState,useEffect,useMemo} from 'react';
import ProductCoffee from './ProductCoffee';
import { connect } from 'react-redux';
import {loadCurrentItem} from "../../redux/Shopping/shopping.action"
import { Link } from 'react-router-dom';


const Products = ({products}) => {
    return (
     
    <div className='text-center bg-gray-100 min-h-screen  pt-[2rem]  text-[25px] font-semibold'>COFFEE MENU

        <div className="grid pb-12 lg:px-[60px] grid-cols lg:grid-cols-4 md:grid-cols-2  md:px-[20px] grid-cols gap-x-[2rem] gap-y-12 pt-3 m-12">
                {
                    products?.map((prod) => (
                      <ProductCoffee key={prod.id} productData={prod}/>
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
                products: state.shop.products,
        
            }
    }

    export default connect(mapStateToProps)(Products);
