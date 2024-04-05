export const SET_USER = "SET_USER";
export const SET_SEARCHINPUT = "SET_SEARCHINPUT";
export const SET_TRANSLATE = "SET_TRANSLATE";
export const SET_LOADERSPINNER = "DATA_LOADERSPINNER";

export const setUserlog = (payload) => ({
    type: SET_USER,
    payload
});
export const setTranslate = (payload) => ({
    type: SET_TRANSLATE,
    payload
});
export const setSearchinput = (payload) => ({
    type: SET_SEARCHINPUT,
    payload
});
export const setLoaderspinner = (payload) => ({
    type: SET_LOADERSPINNER,
    payload
});