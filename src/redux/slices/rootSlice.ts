import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        make: 'Rimac',
        model: 'Nevera',
        year: '2023',
        category: 'Hypercar',
        price: '2050000',
        max_speed: '258mph',
        zero_sixty: '1.87',
        weight: '4750',
        color: 'silver',
        fuel_type: 'electric'
    },
    reducers: {
        chooseMake: (state, action) => { state.make = action.payload},
        chooseModel: (state, action) => { state.model = action.payload},
        chooseYear: (state, action) => { state.year = action.payload},
        chooseCategory: (state, action) => { state.category = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
        chooseSpeed: (state, action) => { state.max_speed = action.payload},
        chooseZeroSixty: (state, action) => { state.zero_sixty = action.payload},
        chooseWeight: (state, action) => { state.weight = action.payload},
        chooseColor: (state, action) => { state.color = action.payload},
        chooseFuel: (state, action) => { state.fuel_type = action.payload}
    }
})

// Export Reducers
export const reducer = rootSlice.reducer;
export const {
    chooseMake,
    chooseModel,
    chooseYear,
    chooseCategory,
    choosePrice,
    chooseSpeed,
    chooseZeroSixty,
    chooseWeight,
    chooseColor,
    chooseFuel,
} = rootSlice.actions;