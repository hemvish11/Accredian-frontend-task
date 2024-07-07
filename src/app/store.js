import { configureStore } from "@reduxjs/toolkit";
import referralSlice from "../features/referralSlice";
import referralBoxSlice from "../features/referralBoxSlice";

export const store = configureStore({
  reducer: {
    referral: referralSlice,
    box: referralBoxSlice
  },
});