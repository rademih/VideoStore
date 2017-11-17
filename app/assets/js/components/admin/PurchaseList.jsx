import React from 'react';
import axios from 'axios';

class PurchaseList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            purchases: []
        };
    }

    componentDidMount() {
        axios.get('/api/v1/videos/purchased')
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
                                    </tr>
                                </tbody>                            
                        )
                    }
                </table>
            </div >
        )
    }
}
export default PurchaseList;