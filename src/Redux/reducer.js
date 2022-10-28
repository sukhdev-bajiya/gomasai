import {
    SET_USER,
    SET_TRANSLATE
} from "./action";

const initState = {
    userlog: null,
    translate: []
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

        default:
            return state;
    }
};
