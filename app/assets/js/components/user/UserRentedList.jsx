import React from 'react';
import axios from 'axios';

class UserRentedList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rentedVideos: []
        };
    }

    componentDidMount() {
        axios.get('/api/v1/videos/rented/2')
            .then(res => {
                const rentedVideos = res.data;
                this.setState({ rentedVideos });
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
                        this.state.rentedVideos.map(
                            rentedVideo =>
                                <tbody key={rentedVideo.id}>
                                    <tr >
                                        <td>
                                            {rentedVideo.video.title}
                                            {rentedVideo.video.season != null && <span> S{rentedVideo.video.season}</span>}
                                            {rentedVideo.video.episode != null && <span>E{rentedVideo.video.episode} </span>}
                                        </td>
                                        <td>{rentedVideo.user.name}</td>
                                        <td>{new Date(rentedVideo.date).toLocaleDateString()}</td>
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
export default UserRentedList;