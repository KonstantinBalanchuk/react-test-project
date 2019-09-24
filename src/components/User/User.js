import React from 'react';

class User extends React.Component {


    render() {
        console.log(this.props);
        return <tr>
            <td>{this.props.data.name.first}</td>
            <td>{this.props.data.name.last}</td>
            <td>{this.props.data.dob.date}</td>
        </tr>;
    }
}

export default User;
