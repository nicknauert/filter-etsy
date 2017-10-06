import update from 'immutability-helper';
import {FILTER_PRODUCTS} from "../actions/actions";
import products from '../data/products';

// Define initial state object
// Make sure the state object contains the `products` array imported in this file
// The state will also require a property for the current state of filterable data
const initialState = {
  products: products,
  filter: ""
}

// Finish writing the reducer for the `FILTER_PRODUCTS` action
// Provide the reducer function delration with the necessary parameters
// Give the `state` parameter a default value of `initialState`
const reducer = function(state = initialState, action) {
  switch (action.type) {
      case FILTER_PRODUCTS:

        if(action.payload == "underTwenty"){
          let filteredProducts = state.products.filter((product)=>{
            return parseInt(product.price) < 20;
          })
          return {products: filteredProducts}

        } else if (action.payload == "overTwenty"){
          let filteredProducts = state.products.filter((product)=>{
            return parseInt(product.price) >= 20;
          })
          return {products: filteredProducts}

        } else {
          return state;
        }
      default:
          return state;
  }
}

export default reducer;
