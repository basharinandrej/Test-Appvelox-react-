import axios from "axios";


export const fetchRecords = () => dispatch => {
    axios.get(`http://localhost:3001/records`).then(({ data }) => {
        dispatch(setRecords(data));
    })
}



export const setRecords = item => {
    return {
        type: "SET_RECORDS",
        payload: item
    }
}
