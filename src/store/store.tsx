import { configureStore } from "@reduxjs/toolkit";
import dealerObjReducer from "./dealer-obj/dealerObjSlice";

export const store = configureStore({
    reducer: {
        dealerObj: dealerObjReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch