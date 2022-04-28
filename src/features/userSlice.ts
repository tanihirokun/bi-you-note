import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { db } from "../firebase";
import {collection} from "firebase/firestore";


interface TaskState {
  tasks: {
    address1: string;
    age: number;
    firstName: string;
    gender: string;
    lastName: string;
    text: string;
  };
}
const colRef = collection(db, 'tasks')

export const fetchUsers = createAsyncThunk("task/getAllTasks", async () => {
  //日付の降順（新しいデータが上に来る）にデータをソートしてtaskのデータを全件取得
  //db.collectionはcloud firebaseのコレクションでつけた名前
  //orderByは作られた中身のdateTime
  // const res = await colRef.orderBy("dateTime", "desc").get();
})



const initialState = {
  tasks: []
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.tasks = action.payload;
    },
  },
});

export const { login, } = userSlice.actions;
// export const selectUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
