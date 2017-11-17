import React from 'react';
import axios from 'axios';

class RentedVideoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            rentedVideos: []
        };
    }

    componentDidMount() {
        axios.get('/api/v1/videos/rented')
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
                                    </tr>

                                </tbody>
                            
                        )
                    }
                </table>
            </div >
        )
    }
}
export default RentedVideoList;