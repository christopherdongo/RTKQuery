
  
import { configureStore } from "@reduxjs/toolkit";

import useReduce from "./reducers/user";

export const store = configureStore({
  reducer: {
    User: useReduce,
  },
});