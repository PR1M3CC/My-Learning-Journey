import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    id: 1,
    message: "Hello",
    completed: false
}

const todoSlice = createSlice({
    name: todo,
    initialState,
    reducers: {
        addTodo: (state, action)=> {

        },
    }
})