import { configureStore, createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    addSong(state, action) {
      state.push(action.payload);
    },
    removeSong(state, action) {
      //
    },
  },
});
const store = configureStore({
  reducer: {
    songs: songSlice.reducer,
  },
});
console.log(songSlice.actions.addSong());
const startingState = store.getState();
console.log(JSON.stringify(startingState));
store.dispatch({
  type: "song/addSong",
  payload: "New Song!!",
});
// store.dispatch(songSlice.actions.addSong("some songs"));

const finalState = store.getState();

console.log(JSON.stringify(finalState));
