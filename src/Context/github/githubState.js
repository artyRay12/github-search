import React, { useReducer } from "react";
import { GithubContext } from "./githubContext";
import { gitGubReducer } from "./githubReducer";
import {
    SEARCH_USERS,
    GET_USERS,
    GET_USER,
    GET_REPOS,
    CLEAR_USERS,
    SET_LOADING,
} from "../alert/types";
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

const withCreds = (url) => {
    return `${url}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
};

export const GitHubState = ({ children }) => {
    const initialState = {
        user: {},
        users: [],
        loading: false,
        repos: [],
    };

    const [state, dispatch] = useReducer(gitGubReducer, initialState);

    const search = async (value) => {
        setLoading();
        const response = await axios.get(
            withCreds(`http://api.github.com/search/users?q=${value}`)
        );
        dispatch({ type: GET_USERS, payload: response.data.items });
    };

    const getUser = async (name) => {
        const response = await axios.get(
            withCreds(`http://api.github.com/users/${name}?`)
        );

        dispatch({ type: GET_USER, payload: response.data });
    };

    const getRepos = async (name) => {
        const response = await axios.get(
            withCreds(`http://api.github.com/users/${name}/repos?per_page=5&`)
        )

        dispatch({ type: GET_REPOS, payload: response.data });
    };

    const clearUsers = async (params) => {
        dispatch({ type: CLEAR_USERS });
    };

    const setLoading = async (params) => {
        dispatch({ type: SET_LOADING });
    };

    const { user, users, repos, loading } = state;

    return (
        <GithubContext.Provider
            value={{
                search,
                getUser,
                getRepos,
                clearUsers,
                setLoading,
                user,
                users,
                repos,
                loading,
            }}
        >
            {children}
        </GithubContext.Provider>
    );
};
