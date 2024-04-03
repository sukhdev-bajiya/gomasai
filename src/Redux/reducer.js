import {
    SET_USER,
    SET_TRANSLATE,
    SET_SEARCHINPUT,
    SET_LOADERSPINNER
} from "./action";

const initState = {
    userlog: null,
    translate: [],
    navbar_searchValur: "",
    loaderspinner: false
};

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case SET_USER:
            return {
                ...state,
                userlog: payload
            };

        case SET_TRANSLATE:
            return {
                ...state,
                translate: payload
            };

        case SET_SEARCHINPUT:
            return {
                ...state,
                navbar_searchValur: payload
            };
        case SET_LOADERSPINNER:
            return {
                ...state,
                loaderspinner: payload
            };

        default:
            return state;
    }
};
