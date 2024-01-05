import { createContext, useState } from "react"; 
import PropTypes from "prop-types";

export const ShoppingCardContext = createContext(null)

export const ShoppingCardProvider = ({ children }) => {

    const [count, setCount] = useState(0)
    const [isProductDetailOpen, setisProductDetailOpen] = useState(false)
    const [productToShow, setProductToShow] = useState({})

    const openProductDetail = () => setisProductDetailOpen(true)
    const closeProductDetail = () => setisProductDetailOpen(false)
        
    return (
    <ShoppingCardContext.Provider 
        value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}
    >
    {children}
    </ShoppingCardContext.Provider>
    )
}

ShoppingCardProvider.propTypes = {
    children: PropTypes.node.isRequired
}