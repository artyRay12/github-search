import React from "react";
import { SHOW_ALERT, HIDE_ALERT, DEFAULT } from "./types";

const handlers = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => null,
    [DEFAULT]: (state) => state,
};

export const alertReducer = (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
};
