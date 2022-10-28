import {
    SET_USER
} from "./action";

const initState = {
    userlog: null
};

export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case SET_USER:
            return {
                ...state,
                userlog: payload
            };

        default:
            return state;
    }
};
