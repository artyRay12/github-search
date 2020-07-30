import React, { useContext, useEffect } from "react";
import { GithubContext } from "../../Context/github/githubContext";
import { Link } from "react-router-dom";

export const Profile = ({ match }) => {
    const { getUser, getRepos, loading, user, repos } = useContext(
        GithubContext
    );
    const urlName = match.params.name;

    useEffect(() => {
        getUser(urlName);
        getRepos(urlName);
    }, []);

    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    const {
        name,
        company,
        avatar_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        public_repos,
        public_gists,
        following,
    } = user;

    return (
        <div>
            <Link to="/" className="btn btn-link"></Link>
            <div className="card-body">
                <div className="row">
                    <div class="col-sm-3">
                        <img
                            src={avatar_url}
                            alt={name}
                            style={{ width: "150px" }}
                        />
                    </div>
                    <div className="col">
                        <h1>{name}</h1>
                        {location && <p>{location}</p>}
                        {bio && (
                            <>
                                <h3>BIO</h3>
                                <p>{bio}</p>
                            </>
                        )}

                        <ul>
                            {login && <li>{login}</li>}
                            {company && <li>{company}</li>}
                            {blog && <li>{blog}</li>}
                        </ul>
                        <a
                            href={html_url}
                            target="_blank"
                            className="btn btn-dark"
                        >
                            open profile
                        </a>
                        <div className="badge badge-dark">
                            Подписчиков: {followers}
                        </div>
                        <div className="badge badge-dark">
                            Подписан: {following}
                        </div>
                        <div className="badge badge-dark">
                            Репозиториев: {public_repos}
                        </div>
                        <div className="badge badge-dark">
                            Гистов: {public_gists}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
