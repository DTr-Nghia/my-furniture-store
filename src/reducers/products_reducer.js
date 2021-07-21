import {
    SIDEBAR_OPEN,
    SIDEBAR_CLOSE,
    GET_PRODUCTS,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_ERROR,
    GET_SINGLE_PRODUCT,
    GET_SINGLE_PRODUCT_SUCCESS,
    GET_SINGLE_PRODUCT_ERROR,
  } from '../action'

  const products_reducer = (state,action) => {
      switch (action.type) {
        case SIDEBAR_OPEN:
            return {...state, isSidebarOpen:true}
        case SIDEBAR_CLOSE:
            return {...state, isSidebarOpen:false}
        case GET_PRODUCTS:
            return {...state, products_loading:true}
        case GET_PRODUCTS_SUCCESS:
            const featured_products = action.payload.filter((payload) => payload.featured === true)
            return {...state,products_loading:false,products:action.payload, featured_products}
        case GET_PRODUCTS_ERROR:
            return {...state,products_loading:false,products_error:true}
        case GET_SINGLE_PRODUCT:
            return {...state,single_product_loading:true,single_product_error:false}
        case GET_SINGLE_PRODUCT_SUCCESS:
            return {...state,single_product_loading:false,single_product:action.payload}
        case GET_SINGLE_PRODUCT_ERROR:
            return {...state,single_product_loading:false,single_product_error:true}
        default:
            throw new Error(`No Matching "${action.type}" - action type`)
      }
  } 
  export default products_reducer