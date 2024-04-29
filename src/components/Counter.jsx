import { Box, Button, Grid } from "@mui/material"
import styles from "../assets/scss/counter.module.scss"
import { useDispatch, useSelector } from "react-redux"
import { incrementCounter, decrementCounter } from "../action/Index"
const Counter = () => {
    const counterStates  = useSelector(state => state.counterReducer)
    const {count} = counterStates;
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCounter())
    }

    const handleDecrement = () => {
        dispatch(decrementCounter())
    }

    return (
        <>
            <Box className={styles.counter_box}>
            <Grid container >
                <Grid item xs={12} >
                    <p className={styles.heading}>{count}</p>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="success" onClick={handleIncrement}>Increment</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="contained" color="error" onClick={handleDecrement}>Decrement</Button>
                </Grid>
            </Grid>
            </Box>
            
        </>
    )
}

export default Counter