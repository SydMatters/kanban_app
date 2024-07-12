import { configureStore } from "@reduxjs/toolkit";
import kanbanApi from "../../../api/apiProvider";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer:{
  [kanbanApi.reducerPath]: kanbanApi.reducer
},

middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat([kanbanApi.middleware])

})

setupListeners(store.dispatch)