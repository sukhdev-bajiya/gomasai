export const SET_USER = "SET_USER";
export const SET_TRANSLATE = "SET_TRANSLATE";

export const setUserlog = (payload) => ({
    type: SET_USER,
    payload
});
export const setTranslate = (payload) => ({
    type: SET_TRANSLATE,
    payload
});