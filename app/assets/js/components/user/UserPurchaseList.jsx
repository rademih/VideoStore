import React from 'react';
import axios from 'axios';

class UserPurchaseList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            purchases: []
        };
    }

    componentDidMount() {
        axios.get('/api/v1/videos/purchased/2')
            .then(res => {
                const purchases = res.data;
                this.setState({ purchases });
            });
    }
       
    render() {

        return (
            <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">User</th>
                            <th scope="col">Date</th>
                            <th scope="col">Rate</th>
                        </tr>
                    </thead>
                    {
                        this.state.purchases.map(
                            purchase =>
                                <tbody key={purchase.id}>
                                    <tr >
                                        <td>
                                            {purchase.video.title}
                                            {purchase.video.season != null && <span> S{purchase.video.season}</span>}
                                            {purchase.video.episode != null && <span>E{purchase.video.episode} </span>}
                                        </td>
                                        <td>{purchase.user.name}</td>
                                        <td>{new Date(purchase.date).toLocaleDateString()}</td>
                                        <td>

                                            <select className="form-control form-control">
                                                <option value=""> </option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>

                                        </td>
                                    </tr>

                                </tbody>
                            
                        )
                    }
                </table>
            </div >
        )
    }
}
export default UserPurchaseList;