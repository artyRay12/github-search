import React, { useContext, useState } from "react";
import { AlertContext } from "../../Context/alert/alertContext";
import { GithubContext } from "../../Context/github/githubContext";

export const Search = () => {
    const [value, setValue] = useState("");
    const { show, hide } = useContext(AlertContext);
    const github = useContext(GithubContext);

    const onSubmit = (event) => {
        if (event.key !== "Enter") return;

        if (value.trim()) {
            github.search(value);
            hide();
        } else {
            show("Enter the data please");
        }
    };

    return (
        <input
            type="text"
            placeholder="Enter name"
            className="form-control"
            onKeyPress={onSubmit}
            value={value}
            onChange={(event) => setValue(event.target.value)}
        />
    );
};
