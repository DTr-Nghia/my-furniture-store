import axios from 'axios'
import React, { useContext, useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'
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

const initialState = {
    isSidebarOpen: false,
    products_loading: false,
    products_error: false,
    products: [],
    featured_products: [],
    single_product: [],
    single_product_loading: false,
    single_product_error:false,
}
const ProductsContext = React.createContext()
    
export const ProductsProvider = ({children}) => {
    const [state,dispatch] = useReducer(reducer,initialState)

    const openSidebar = () => {
        dispatch({type:SIDEBAR_OPEN})
    }
    const closeSidebar = () => {
        dispatch({type: SIDEBAR_CLOSE})
    }
    const getProducts = async (url) => {
        dispatch({type:GET_PRODUCTS})
        try {
            const res = await axios.get(url);
            const products = res.data;
            dispatch({type:GET_PRODUCTS_SUCCESS,payload:products})
        }catch(error){
            dispatch({type:GET_PRODUCTS_ERROR})
        }
    }
    const getSingleProduct = async (url) => {
        dispatch({type:GET_SINGLE_PRODUCT})
        try {
            const res = await axios.get(url);
            const singleProduct = await res.data;
            dispatch({type:GET_SINGLE_PRODUCT_SUCCESS,payload:singleProduct})
        } catch (error) {
            dispatch({type:GET_SINGLE_PRODUCT_ERROR})
        }
    }
    useEffect(() => {
        getProducts(url)
    },[])
    return (
        <ProductsContext.Provider value={{...state,openSidebar,closeSidebar,getSingleProduct}}>
            {children}
        </ProductsContext.Provider>
    );
}
export const useProductsContext = () => {
    return useContext(ProductsContext)
}