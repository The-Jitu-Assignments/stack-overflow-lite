import { configureStore } from "@reduxjs/toolkit";
import answersSlice from "./features/answer/answerSlice";
import commentsSlice from "./features/comment/commentSlice";
import quizSlice from "./features/question/quizSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    user: userSlice,
    quiz: quizSlice,
    answers: answersSlice,
    comments: commentsSlice
  }
});