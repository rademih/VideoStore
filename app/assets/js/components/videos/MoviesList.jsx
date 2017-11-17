import React from 'react';
import axios from 'axios';
import Thumbnail from '../Thumbnail.jsx';

class MovieList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: []
        };
    }
    componentDidMount() {
        axios.get('/api/v1/movies?titleFilter=' + this.props.search+'&sortBy='+this.props.sort)
            .then(res => {
                const movies = res.data;
                this.setState({ movies });
            });
    }
    
    componentWillReceiveProps(nextProps) {
        axios.get('/api/v1/movies?titleFilter=' + nextProps.search+'&sortBy='+nextProps.sort)
        .then(res => {
            const movies = res.data;
            this.setState({ movies });
        });
      }
    
    render() {
        return (

            <div className="row">
                {
                    this.state.movies.map(
                        movie =>
                            <Thumbnail video={movie} key={movie.id} />
                    )
                }
            </div>
        )
    }
}
export default MovieList;