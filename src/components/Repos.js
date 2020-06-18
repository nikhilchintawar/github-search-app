import React, { useState, useEffect } from 'react';
import Axios from "axios";
import {ListGroup, ListGroupItem} from "reactstrap";

const Repos = ({repos_url}) => {
    const [repos, setRepos] = useState([]);

    const fetchRepos = async() => {
        const {data} = await Axios.get(repos_url)
        setRepos(data)
    }

    useEffect(() => {
        fetchRepos()
    }, [repos_url])

    return (
        <div>
        <ListGroupItem>
            {repos.map(repo => (
                <ListGroupItem key={repo.id}>
                    <div className="text-primary">{repo.name}</div>
                    <div className="text-secondary">{repo.language}</div>
                    <div className="text-info">{repo.description}</div>
                </ListGroupItem>
            ))}
        </ListGroupItem>
            
        </div>
    );
};

export default Repos;