import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    isReferralBoxOpened:false,
}

const referralBoxSlice = createSlice({
    name: 'referralBox',
    initialState,
    reducers:{
        setIsReferralBoxOpened:(state,action)=>{
            state.isReferralBoxOpened=action.payload;
        }
    }
});

export const {setIsReferralBoxOpened} = referralBoxSlice.actions;
export default referralBoxSlice.reducer;