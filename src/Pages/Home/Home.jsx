import React, { useContext } from "react";
import { Search } from "../../Components/Search/Search";
import { Card } from "../../Components/Carts/Card";
import { GithubContext } from "../../Context/github/githubContext";

export const Home = () => {
    const { loading, users } = useContext(GithubContext);

    return (
        <div>
            <Search />
            <div className="row">
                {loading ? (
                    <p className="text-center">loader</p>
                ) : (
                    users.map((user) => {
                        return (
                            <div class="col-sm-4 mt-4" key={user.id}>
                                <Card user={user}/>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};
