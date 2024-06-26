import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getJobs = createAsyncThunk(
  "jobsData/getJobsData",
  async ({ limit, offset }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        {
          limit: limit,
          offset: offset,
        },
        {
          "Content-Type": "application/json",
        }
      );
      return response.data;
    } catch (err) {
      return rejectWithValue(err);
    }
  }
);

const initialState = {
  jobsData: [],
  jobsDataLoading: false,
  jobsDataError: "", 
  jobFilters: JSON.parse(sessionStorage.getItem("jobFilters")) || {},
  totalCount: null,
};

export const jobsDataSlice = createSlice({
  name: "jobsData",
  initialState,
  reducers: {
    handleFiltering(state, action) {
      const { filterName, filterValue } = action.payload;
      state.jobFilters = { ...state.jobFilters, [filterName]: filterValue };
      sessionStorage.setItem("jobFilters", JSON.stringify(state.jobFilters));
    },
  },
  extraReducers(builder) {
    builder
    .addCase(getJobs.pending, (state, action) => {
      state.jobsDataLoading = true;
    })
    .addCase(getJobs.fulfilled, (state, action) => {
      state.jobsDataLoading = false;
      state.totalCount = action?.payload?.totalCount;
      state.jobsData = [...state.jobsData, ...action.payload?.jdList];
    })
    .addCase(getJobs.rejected, (state, action) => {
      state.jobsDataLoading = false;
      state.jobsDataError = action.payload;
    });
  },
});
export const { handleFiltering } = jobsDataSlice.actions;
export const selectJobsData = (state) => state.jobsData.jobsData;
export const selectJobDataLoading = (state) => state.jobsData.jobsDataLoading;
export const selectJobFilters = (state) => state.jobsData.jobFilters;
export const selectTotalCount = (state) => state.jobsData.totalCount;
export default jobsDataSlice.reducer;