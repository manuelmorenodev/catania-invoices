import { gql, useQuery } from '@apollo/client';
import React from 'react';

export default function UserList() {

    const { loading, error, data } = useQuery(gql`
        query getUsers {
            users {
                id
                name
            }
        }
    `)

    return <div className="UserList">
        <div className="card">
            <div className="card-header">Users</div>
            <ul className="list-group list-group-flush">
                {data && data.users.map(({id, name}) => 
                    <li className="list-group-item" key={id}>
                        {name}
                    </li>
                )}
            </ul>
            <div className="card-body">
                <a href="#" class="card-link">Nuevo usuario</a>
            </div>
        </div>
        <ul>
        </ul>
    </div>;
}
