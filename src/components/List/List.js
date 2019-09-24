import React from 'react';
import User from './User';

class List extends React.Component {

    state = {
        loading: true,
        users: null
    }

    async componentDidMount() {
        const url = 'https://randomuser.me/api/?results=20';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({
            users: data.results,
            loading: false
        })

        console.log(data.results);
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.users ? (
                    <div>Loading...</div>) : (
                    <ol>
                        {this.state.users.map(user => (
                            <li><User data={user}/></li>
                        ))}
                    </ol>
                )}
            </div>
        );
    }
}

export default List;
