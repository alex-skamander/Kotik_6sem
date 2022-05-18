import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductService from "../api/product";
const initialState = [];


// export const createTutorial = createAsyncThunk(
//     "tutorials/create",
//     async ({ title, description }) => {
//         const res = await TutorialDataService.create({ title, description });
//         return res.data;
//     }
// );
export const retrieveTutorials = createAsyncThunk(
    "products/fetch",
    async ({ type }) => {
        const res = await ProductService.getAllProductsByType(type);
        console.log(res.data);

        return res.data;
    }
);
// export const updateTutorial = createAsyncThunk(
//     "tutorials/update",
//     async ({ id, data }) => {
//         const res = await TutorialDataService.update(id, data);
//         return res.data;
//     }
// );
// export const deleteTutorial = createAsyncThunk(
//     "tutorials/delete",
//     async ({ id }) => {
//         await TutorialDataService.remove(id);
//         return { id };
//     }
// );
// export const deleteAllTutorials = createAsyncThunk(
//     "tutorials/deleteAll",
//     async () => {
//         const res = await TutorialDataService.removeAll();
//         return res.data;
//     }
// );
// export const findTutorialsByTitle = createAsyncThunk(
//     "tutorials/findByTitle",
//     async ({ title }) => {
//         const res = await TutorialDataService.findByTitle(title);
//         return res.data;
//     }
// );
const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: {
        [retrieveTutorials.fulfilled]: (state, action) => {
            return [...action.payload];
        },
    },
});
const { reducer } = productSlice;
export default reducer;