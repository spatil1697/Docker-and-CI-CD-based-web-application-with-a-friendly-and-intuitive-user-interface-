//create a context
//provider
//cosumer => useContext Hook
// import { createContext, useContext, useEffect, useReducer } from "react";
// import products from "./Product";
// import reducer from  "../reducer/ProductReducer"

// const AppContext = createContext();

// const mapProducts = products.map(() => { 
//     return products;
// });

// const initialState ={
//     isLoading: false,
//     isError: false,
//     products: [],
//     featureProduct:[],
// }

// const AppProvider = ({children}) => {
   
//     const [state, dispatch] = useReducer(reducer, initialState);
    
//  const getProducts = (() => {
//        dispatch ({type: "SET_LOADING"});
//         try{ 
//     dispatch ({type: "MY_DATA", payload:products});
//          } catch(error){
//          dispatch({type:"Error"});

//          };
//      });
    
//     useEffect(() => {
//       getProducts(mapProducts);
//     },[]);
    
   
        
// return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>

// };

// //custom hooks
//  const useProductContext =()=>{
//     return useContext(AppContext)
//  }
// export {AppProvider, AppContext,useProductContext};