import * as actionTypes from './shopping.types'


const INITIAL_STATE = {
    products: [
          //Data for Coffee
        {
            id: 1,
            name: "Latte",
            image:require( '../../public/CoffeeApp_Latte.jpg'),
            price: 5.00,
            Sugar:"Sugar+",
            Milk:"Milk+",
            Design:"Design",
            Snacks:"Snacks",
            small:"Small",
            Medium:"Medium",
            Large:"Large",
            category:"Coffee"
           
            
             
          },
          {
            id: 2,
            name: "Ice Coffee",
            image:require( '../../public/CoffeeApp_IceCoffee.png'),
            price: 5.00,
            Sugar:"Sugar+",
            Milk:"Milk+",
            Design:"Design",
            Snacks:"Snacks",
            small:"Small",
            Medium:"Medium",
            Large:"Large",
            category:"Coffee"
          
          },
            {
              id: 3,
              name: "Espresso",
              image:require( '../../public/CoffeeApp_Espresso.png'),
              price:5.00,
              Sugar:"Sugar+",
              Milk:"Milk+",
              Design:"Design",
              Snacks:"Snacks",
              small:"Small",
              Medium:"Medium",
              Large:"Large",
              category:"Coffee"
           
            },
            {
              id: 4,
              name: "Creamy Coffee Latte",
              image:require( '../../public/Creamy_Coffee_Latte.jpg'),
              price: 5.00,
              Sugar:"Sugar+",
              Milk:"Milk+",
              Design:"Design",
              Snacks:"Snacks",
              small:"Small",
              Medium:"Medium",
              Large:"Large",
              category:"Coffee"
            
            },
              {
                id: 5,
                name: "Cappuccino",
                image:require( '../../public/Cappuccino.jpg'),
                price: 5.00,
                Sugar:"Sugar+",
                Milk:"Milk+",
                Design:"Design",
                Snacks:"Snacks",
                small:"Small",
                Medium:"Medium",
                Large:"Large",
                category:"Coffee"
             },
              {
                id: 6,
                name: "Matcha Latter",
                image:require( '../../public/Matcha_Latter.jpg'),
                price: 5.00,
                Sugar:"Sugar+",
                Milk:"Milk+",
                Design:"Design",
                Snacks:"Snacks",
                small:"Small",
                Medium:"Medium",
                Large:"Large",
                category:"Coffee"
              
              },
                {
                  id: 7,
                  name: "Light Ice Coffee ",
                  image:require( '../../public/Light_Ice_Coffee.jpg'),
                  price: 5.00,
                  Sugar:"Sugar+",
                  Milk:"Milk+",
                  Design:"Design",
                  Snacks:"Snacks",
                  small:"Small",
                  Medium:"Medium",
                  Large:"Large",
                  category:"Coffee"
                
                },
                {
                  id: 8,
                  name: "Chocolate Cookie Frappe",
                  image:require( '../../public/Chocolate_Cookie_Frappe.jpg'),
                  price: 5.00,
                  Sugar:"Sugar+",
                  Milk:"Milk+",
                  Design:"Design",
                  Snacks:"Snacks",
                  small:"Small",
                  Medium:"Medium",
                  Large:"Large",
                  category:"Coffee"
                
                },
              
    ],
    
    //Data for Snacks
    snacks: [
              {
              id: 1,
              name: "Chips",
              image:require( '../../public/snack_Banachips.jpg'),
              price: 5.00,
              },
            {
              id: 2,
              name: "Cream Donuts",
              image:require( '../../public/snacks_Donuts.jpg'),
              price: 5.00,
            
            },
              {
              id: 3,
              name: "Dry Fruits (Peach)",
              image:require( '../../public/snack_Chips.jpg'),
              price:5.00,
            
      
            },
            {
              id: 4,
              name: "Chocolate Donut",
              image:require( '../../public/snacks_ChocolateDonuts.jpg'),
              price: 5.00,
            
            
            },
              {
                id: 5,
                name: "Dry Fruits (Orange)",
                image:require( '../../public/snacks_Orange.jpg'),
                price: 5.00,
              
              },
              {
                id: 6,
                name: "Caramel Cupcakes",
                image:require( '../../public/snacks_pancakes.jpg'),
                price: 5.00,
              
              
              },
                {
                  id: 7,
                  name: "Chocolate Drizzle",
                  image:require( '../../public/Chocolate_Drizzle.jpg'),
                  price: 5.00,
                
                
                },
                {
                  id: 8,
                  name: "Strawberry Mousse",
                  image:require( '../../public/snacks_strawberryMuesli.jpg'),
                  price: 5.00,
        
        
          },
],
    cart: [],
    currentItem: [],
}

  //Reducers for Coffee
const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case actionTypes.ADD_TO_CART:
            
                //Get the items data from the products array
                const item = state.products.find((prod)=> prod.id === action.payload.id)
                ;
                //check if item is in cart already
                const inCart = state.cart.find ((item) =>
                 item.id ===action.payload.id ? true: false
                );
                return {
                    ...state,
                    cart: inCart 
                    ? state.cart.map((item)=> 
                        item.id === action.payload.id &&
                          item.setSize ===action.payload.setSize&&
                          item.setCat ===action.payload.setCat
                            ? {...item, qty: item.qty + 1} 
                            :item
                        ) 
                    : [...state.cart, {...item, qty:1, setSize:action.payload.setSize, setCat:action.payload.setCat}], 
                    
                };
            
        case actionTypes.REMOVE_FROM_CART:
             return{
                ...state,
                cart: state.cart.map((item) => 
                (item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item))
                .filter(item => item.qty > 0)

            };
        case actionTypes.ADJUST_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                 item.id !==action.payload.id 
                    ? {...item, qty: +action.payload.qty}
                    : item   
               ), 
            }  
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            }
        
            //Reducers for Coffee
            
            case actionTypes.ADD_TO_CARTSNACKS:
          
            //Get the items data from the products array
            const item1 = state.snacks.find((prod)=> prod.id === action.payload.id);
            //check if item is in cart already
            const inCart1 = state.cart.find ((item1) =>
             item1.id ===action.payload.id ? true: false
            );
            return {
                ...state,
                cart: inCart 
                ? state.cart.map((item1)=> 
                    item1.id === action.payload.id 
                        ? {...item1, qty: item1.qty + 1} 
                        :item1
                    ) 
                : [...state.cart, {...item1, qty:1}], 
                
            };
        
    case actionTypes.REMOVE_FROM_CARTSNACKS:
        return {
            ...state,
            cart: state.snacks.filter((item) => 
            item.id == action.payload.id),
        };
    case actionTypes.ADJUST_QTYSNACKS:
        return {
            ...state,
            cart: state.snacks.map((item) =>
             item.id !==action.payload.id 
                ? {...item, qty: +action.payload.qty}
                : item   
            ), 
        }
    case actionTypes.LOAD_CURRENT_ITEMSNACKS:
        return {
            ...state,
            currentItem: action.payload,
        }
        default:
            return state;
    }


}

export default shopReducer; 