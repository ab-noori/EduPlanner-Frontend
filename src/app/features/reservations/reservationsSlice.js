import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservations: null,
  status: null,
  error: null,
};

export const retrieveReservs = createAsyncThunk('reservations/retrieveReservs', async () => {
  const loggedUser = JSON.parse(sessionStorage.getItem('logged_user'));
  const userId = loggedUser.id;
  const request = await axios.get(`https://edu-planner-backend.onrender.com/api/reservations?user_id=${userId}`);
  const response = await request.data;
  return response || null;
});

export const createReservation = createAsyncThunk('reservations/createReservation', async (reservationParams) => {
  const reqBody = {
    reservation: {
      ...reservationParams,
    },
  };
  const request = await axios.post('https://edu-planner-backend.onrender.com/api/reservations', reqBody);
  const response = await request.data;
  return response || null;
});

const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(retrieveReservs.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(retrieveReservs.fulfilled, (state, action) => {
        state.reservations = action.payload;
        state.status = null;
        state.error = null;
      })
      .addCase(retrieveReservs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createReservation.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(createReservation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.status = 'completed';
        state.creationStatus = action.payload;
      });
  },
});

export default reservationsSlice.reducer;
