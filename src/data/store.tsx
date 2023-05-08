import { configureStore } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 0,
      title: 'Product 1',
      price: 300,
      discount: false,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga at maiores sed assumenda! Blanditiis quasi dolor, dolore cum, minima pariatur magni ratione eligendi reprehenderit sint aliquid. Nemo, doloribus animi.',
      stars: 4,
      image: 'https://picsum.photos/id/400/600',
      amount: 0,
      brand: 'The Brand'
    },
    {
      id: 1,
      title: 'Product 2',
      price: 150,
      discount: false,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga at maiores sed assumenda! Blanditiis quasi dolor, dolore cum, minima pariatur magni ratione eligendi reprehenderit sint aliquid. Nemo, doloribus animi.',
      stars: 5,
      image: 'https://picsum.photos/id/600/600',
      amount: 0,
      brand: 'The Brand'
    },
    {
      id: 2,
      title: 'Product 3',
      price: 220,
      discount: false,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga at maiores sed assumenda! Blanditiis quasi dolor, dolore cum, minima pariatur magni ratione eligendi reprehenderit sint aliquid. Nemo, doloribus animi.',
      stars: 5,
      image: 'https://picsum.photos/id/608/600',
      amount: 0,
      brand: 'The Brand'
    },
    {
      id: 3,
      title: 'Product 4',
      price: 466,
      discount: false,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga at maiores sed assumenda! Blanditiis quasi dolor, dolore cum, minima pariatur magni ratione eligendi reprehenderit sint aliquid. Nemo, doloribus animi.',
      stars: 3,
      image: 'https://picsum.photos/id/602/600',
      amount: 0,
      brand: 'The Brand'
  },
  {
      id: 4,
      title: 'Product 5',
      price: 759,
      discount: false,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga at maiores sed assumenda! Blanditiis quasi dolor, dolore cum, minima pariatur magni ratione eligendi reprehenderit sint aliquid. Nemo, doloribus animi.',
      stars: 3,
      image: 'https://picsum.photos/id/603/600',
      amount: 0,
      brand: 'The Brand'
  },
  {
      id: 5,
      title: 'Product 6',
      price: 123,
      discount: false,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga at maiores sed assumenda! Blanditiis quasi dolor, dolore cum, minima pariatur magni ratione eligendi reprehenderit sint aliquid. Nemo, doloribus animi.',
      stars: 5,
      image: 'https://picsum.photos/id/641/600',
      amount: 0,
      brand: 'The Brand'
  },
  {
      id: 6,
      title: 'Product 7',
      price: 456,
      discount: false,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga at maiores sed assumenda! Blanditiis quasi dolor, dolore cum, minima pariatur magni ratione eligendi reprehenderit sint aliquid. Nemo, doloribus animi.',
      stars: 2,
      image: 'https://picsum.photos/id/642/600',
      amount: 0,
      brand: 'The Brand'
  },
  {
      id: 7,
      title: 'Product 8',
      price: 159,
      discount: false,
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia fuga at maiores sed assumenda! Blanditiis quasi dolor, dolore cum, minima pariatur magni ratione eligendi reprehenderit sint aliquid. Nemo, doloribus animi.',
      stars: 3,
      image: 'https://picsum.photos/id/643/600',
      amount: 0,
      brand: 'The Brand'
  }
]
};

const reducer = (state = initialState, action: any) => {
    console.log('reducer...')
    console.log(action.type)
    console.log(action.payload)

    switch (action.type) {
      case 'ADD_PRODUCT':
        return {
          ...state,
          products: state.products.concat(action.payload)
        };
      case 'REMOVE_PRODUCT':
        return {
          ...state,
          products: state.products.filter(product => product.id !== action.payload)
        };
      case 'INCREASE_AMOUNT_IN_CART':
        return {
          ...state,
          products: state.products.map(product => {
            if (product.id === action.payload) {
              console.log('ids iguais')
              return { ...product, amount: product.amount + 1 };
            }
            return product;
          })
        };
      case 'DECREASE_AMOUNT_IN_CART':
        return {
          ...state,
          products: state.products.map(product => {
            if (product.id === action.payload) {
              return { ...product, amount: product.amount - 1 };
            }
            return product;
          })
        };
        case 'DELETE_FROM_CART':
          return {
            ...state,
            products: state.products.map(product => {
              if (product.id === action.payload) {
                return { ...product, amount: 0 };
              }
              return product;
            })
          };
      default:
        return state;
    }
  }

const store = configureStore({reducer: reducer});

export default store;