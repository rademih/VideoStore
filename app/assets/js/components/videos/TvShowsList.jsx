import React from 'react';
import axios from 'axios';
import Thumbnail from '../Thumbnail.jsx';
class TvShowsList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tvShows: []

        };
    }
    componentWillReceiveProps(nextProps) {
        axios.get('/api/v1/tvShows?titleFilter=' + nextProps.search+'&sortBy='+nextProps.sort)
            .then(res => {
                const tvShows = res.data;
                this.setState({ tvShows })
            });
    }
    componentDidMount() {
        axios.get('/api/v1/tvShows?titleFilter=' + this.props.search+'&sortBy='+this.props.sort)
            .then(res => {
                const tvShows = res.data;
                this.setState({ tvShows });
            });
    }
    render() {
        return (

            <div className="row">
                {
                    this.state.tvShows.map(
                        tvShow =>
                            <Thumbnail video={tvShow} key={tvShow.id} />                            
                    )
                }
            </div>
        )
    }
}
export default TvShowsList;