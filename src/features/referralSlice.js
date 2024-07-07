import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  formData: {
    refereeName: "",
    refereeEmail: "",
    refereePhoneNumber: "",
    friendName: "",
    friendEmail: "",
    friendPhoneNumber: "",
  },
  loading: false,
  isSuccessfull: false,
  isFailure: false,
};

export const submitReferral = createAsyncThunk(
  'referral/submitReferral',
  async (formData, { rejectWithValue }) => {
    try {
      // const response = await fetch("http://localhost:3000/api/addReferralDetails", {
      const response = await fetch(import.meta.env.VITE_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const error = await response.json();
        return rejectWithValue(error);
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const referralSlice = createSlice({
  name: 'referral',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },
    resetFormData: (state) => {
      state.formData = initialState.formData;
    },
    setIsSuccessfull: (state, action) => {
      state.isSuccessfull = action.payload;
    },
    setIsFailure: (state, action) => {
      state.isFailure = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitReferral.pending, (state) => {
        state.loading = true;
      })
      .addCase(submitReferral.fulfilled, (state, action) => {
        state.loading = false;
        state.isSuccessfull = true;
      })
      .addCase(submitReferral.rejected, (state, action) => {
        state.loading = false;
        state.isFailure = true;
      });
  },
});

export const { updateFormData, resetFormData, setIsSuccessfull, setIsFailure, setLoading } = referralSlice.actions;
export default referralSlice.reducer;