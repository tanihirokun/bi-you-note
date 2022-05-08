import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { db } from "../firebase";
import { collection } from "firebase/firestore";

interface TaskState {
  idCount: number;
  tasks: {
    id: number;
    address1: string;
    age: number;
    firstName: string;
    gender: string;
    lastName: string;
    text: string;
    completed: boolean;
  }[];
  selectedTask: {
    id: number;
    address1: string;
    age: number;
    firstName: string;
    gender: string;
    lastName: string;
    text: string;
    completed: boolean;
  };
  isModalOpen: boolean;
}
const colRef = collection(db, "tasks");

export const fetchUsers = createAsyncThunk("task/getAllTasks", async () => {
  //日付の降順（新しいデータが上に来る）にデータをソートしてtaskのデータを全件取得
  //db.collectionはcloud firebaseのコレクションでつけた名前
  //orderByは作られた中身のdateTime
  // const res = await colRef.orderBy("dateTime", "desc").get();
});

const initialState: TaskState = {
  idCount: 1,
  tasks: [
    {
      id: 1,
      address1: "渋谷",
      age: 30,
      firstName: "谷川",
      lastName: "博昭",
      gender: "male",
      text: "テスト",
      completed: false,
    },
  ],
  selectedTask: {
    id: 0,
    address1: "",
    age: 0,
    firstName: "",
    gender: "",
    lastName: "",
    text: "",
    completed: false,
  },
  isModalOpen: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.idCount,
        address1: action.payload,
        age: action.payload,
        firstName: action.payload,
        gender: action.payload,
        lastName: action.payload,
        text: action.payload,
        completed: false,
      };
      state.tasks = [newTask, ...state.tasks];
    },
  },
});

export const { createTask } = userSlice.actions;
export const selectUser = (state: RootState): TaskState["tasks"] =>
  state.user.tasks;
export default userSlice.reducer;
