import { INCREMENT, DECREMENT } from "./actionType"

export const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}

export const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}