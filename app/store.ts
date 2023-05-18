import { createStore } from 'redux';

// Define the initial state interface
interface AppState {
    price: number | null;
  }

// Define actions
enum ActionType {
  SET_PRICE = 'SET_PRICE',
}

// Define action interfaces
interface SetPriceAction {
  type: ActionType.SET_PRICE;
  price: number;
}

// Define action creators
export function setPrice(price: number): SetPriceAction {
  return { type: ActionType.SET_PRICE, price };
}

// Define reducer
function reducer(state: AppState = { price: null }, action: SetPriceAction): AppState {
    switch (action.type) {
      case ActionType.SET_PRICE:
        return { ...state, price: action.price };
      default:
        return state;
    }
  }

// Create the Redux store
const store = createStore(reducer);

export default store;