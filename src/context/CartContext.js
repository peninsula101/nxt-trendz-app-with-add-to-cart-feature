import React from 'react'

const CartContext = React.createContext({
  cartList: [
    {
      title: 'Robo Toy',
      brand: 'LEGO',
      id: 1001,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
      price: 760,
      quantity: 1,
    },
    {
      title: 'Product 2',
      brand: 'LOGO',
      id: 1002,
      imageUrl:
        'https://assets.ccbp.in/frontend/react-js/sample-product-img.jpg',
      price: 760,
      quantity: 2,
    },
  ],
  addCartItem: () => {},
  deleteCartItem: () => {},
})

export default CartContext
