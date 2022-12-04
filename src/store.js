import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./features/question/quizSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    quiz: quizSlice
  }
});