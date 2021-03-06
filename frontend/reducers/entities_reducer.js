import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import productReducer from './products_reducer';
import ShoppingCartItemsReducer from './shopping_cart_items_reducer';
import itemsReducer from './item_reducer';
import reviewReducer from './review_reducer';
import shortlistReducer from "./shortlist_reducer";
import shortlistItemReducer from "./shortlist_item_reducer";




const entitiesReducer = combineReducers({
  users: usersReducer,
  products: productReducer,
  shoppingCartItems: ShoppingCartItemsReducer,
  items: itemsReducer,
  reviews: reviewReducer,
  shortlist: shortlistReducer,
  shortlistItem: shortlistItemReducer
});

export default entitiesReducer;