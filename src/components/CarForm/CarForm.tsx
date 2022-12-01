// Imports from React and packages
import React from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";

//Local Imports
import { 
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
} from "../../redux/slices/rootSlice";
import { Input } from "../sharedComponents/Input";
import { serverCalls } from "../../api";
import { useGetData } from "../../custom-hooks";

interface CarFormProps {
    id?:string;
    data?: {}
}

interface CarState {
    make: string;
    model: string;
    year: number;
    category: string;
    price: number;
    max_speed: string;
    zero_sixty: string;
    weight: string;
    color: string;
    fuel_type: string
}

export const CarForm = (props:CarFormProps) => {
    const dispatch = useDispatch();
    let { carData, getData } = useGetData();
    const store = useStore()
    const { register, handleSubmit } = useForm({})

    const onSubmit = async (data:any, event: any) => {
        console.log(props.id)
        if (props.id) {
            await serverCalls.update(props.id!, data)
            console.log(`Updated: ${data} ${props.id}`)
            window.location.reload()
            event.target.reset();
        } else {
            dispatch(chooseMake(data.make))
            dispatch(chooseModel(data.model))
            dispatch(chooseYear(data.year))
            dispatch(chooseCategory(data.category))
            dispatch(choosePrice(data.price))
            dispatch(chooseSpeed(data.max_speed))
            dispatch(chooseZeroSixty(data.zero_sixty))
            dispatch(chooseWeight(data.weight))
            dispatch(chooseColor(data.color))
            dispatch(chooseFuel(data.fuel_type))
            await serverCalls.create(store.getState())
            window.location.reload()
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Make</label>
                    <Input {...register('make')} name='make' placeholder="Make" />
                </div>
                <div>
                    <label htmlFor="model">Model</label>
                    <Input {...register('model')} name='model' placeholder="Model" />
                </div>
                <div>
                    <label htmlFor="year">Year</label>
                    <Input {...register('year')} name='year' placeholder="Year" />
                </div>
                <div>
                    <label htmlFor="category">Category</label>
                    <Input {...register('category')} name='category' placeholder="Category" />
                </div>
                <div>
                    <label htmlFor="price">Price</label>
                    <Input {...register('price')} name='price' placeholder="Price" />
                </div>
                <div>
                    <label htmlFor="max_speed">Max Speed</label>
                    <Input {...register('max_speed')} name='max_speed' placeholder="Max Speed" />
                </div>
                <div>
                    <label htmlFor="zero_sixty">0-60</label>
                    <Input {...register('zero_sixty')} name='zero_sixty' placeholder="0-60" />
                </div>
                <div>
                    <label htmlFor="weight">Weight</label>
                    <Input {...register('weight')} name='weight' placeholder="Weight" />
                </div>
                <div>
                    <label htmlFor="color">Color</label>
                    <Input {...register('color')} name='color' placeholder="Color" />
                </div>
                <div>
                    <label htmlFor="fuel_type">Fuel Type</label>
                    <Input {...register('fuel_type')} name='fuel_type' placeholder="Fuel Type" />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}