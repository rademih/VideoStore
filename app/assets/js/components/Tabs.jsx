import React from 'react';
import MoviesList from './videos/MoviesList.jsx';
import TvShowsList from './videos/TvShowsList.jsx';

class Tabs extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="nav nav-tabs" id="myTab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Movies</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Tv shows</a>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <br />
                        <MoviesList search={this.props.search} sort={this.props.sort} />
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <br />                       
                        <TvShowsList search={this.props.search} sort={this.props.sort} />
                    </div>
                </div>

            </div >
        )
    }
}
export default Tabs;