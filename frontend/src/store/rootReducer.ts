import { combineReducers } from '@reduxjs/toolkit';

import userReducer, * as fromUser from './userSlice';
import petsReducer, * as fromPets from './petsSlice';
import locationsReducer, * as fromLocations from './locationsSlice';
import blogsReducer, * as fromBlogs from './blogsSlice';
import {
  USER_FEATURE_KEY,
  PETS_FEATURE_KEY,
  LOCATIONS_FEATURE_KEY,
  BLOGS_FEATURE_KEY,
} from './keywords';

const rootReducer = combineReducers({
  [USER_FEATURE_KEY]: userReducer,
  [PETS_FEATURE_KEY]: petsReducer,
  [LOCATIONS_FEATURE_KEY]: locationsReducer,
  [BLOGS_FEATURE_KEY]: blogsReducer,
});

export { fromUser, fromPets, fromLocations, fromBlogs };
export default rootReducer;
