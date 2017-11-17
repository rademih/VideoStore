import React from 'react';
import axios from 'axios';

class VideoList extends React.Component {
    constructor(props) {
        super(props);
        this.deleteRow = this.deleteRow.bind(this);
        this.state = {
            videos: []
        };
    }

    componentDidMount() {
        axios.get('/api/v1/videos')
            .then(res => {
                const videos = res.data;
                this.setState({ videos });
            });
    }
    deleteRow(id, event) {
        axios.delete('/api/v1/video/delete/' + id)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            alert("Delete is not possible");
          });
          event.preventDefault();
    }
    render() {

        return (
            <div className="container">
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    {
                        this.state.videos.map(
                            video =>
                                <tbody key={video.id}>
                                    <tr >
                                        <td>{video.title}</td>
                                        <td>                                            
                                                <a href={'/video/edit/'+ video.id} className="btn btn-primary btn-sm">Edit</a>
                                                <button type="button" className="btn btn-danger btn-sm" onClick={(e) => this.deleteRow(video.id, e)}>Delete</button>
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
export default VideoList;