import { GET_LOGS, ADD_LOG, SET_LOADING, LOGS_ERROR, DELETE_LOG } from './types';

// Functions
// 1. Get Logs from api
export const getLogs = () => {
    return async (dispatch) => {
        try {
            // Set Loading to true
            setLoading();
            // Fetch from api
            const res = await fetch('/logs');
            const data = await res.json();
    
            // Send dispatch to reducer to get all logs from api
            dispatch({ type: GET_LOGS, payload: data })
        } catch (err) {
            dispatch({ type: LOGS_ERROR, payload: err.response.data })
        }
    }
}

// 2. Add a Log
export const addLog = (log) => {
    return async (dispatch) => {
        try {
            // Set Loading to true
            setLoading();
            // Fetch add a log api
            const res = await fetch('/logs', {
                method: 'POST',
                body: JSON.stringify(log),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            // Send dispatch to reducer to add a log to state
            dispatch({ type: ADD_LOG, payload: res.body })
        } catch (err) {
            dispatch({ type: LOGS_ERROR, payload: err.response.data })
        }
    }
}

// 3. Delete a Log
export const deleteLog = (id) => {
    return async (dispatch) => {
        try {
            // Set Loading to true
            setLoading();
            // Fetch add a log api
            await fetch(`/logs/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            // Send dispatch to reducer to delete log from state
            dispatch({ type: DELETE_LOG, payload: id })
        } catch (err) {
            dispatch({ type: LOGS_ERROR, payload: err.response.data })
        }
    }
}

// Set Loading
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}