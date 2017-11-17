import React from 'react';
import StarRatings from 'react-star-ratings';

class Thumbnail extends React.Component {

    render() {
        return (
            <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <div className="card" >
                    <img className="card-img-top" src="https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png" alt="Card image cap"></img>
                    <div className="card-body">
                        <a href={'/video/details/' + this.props.video.id} id="videoDetails">
                            <h4 className="card-title">
                                {this.props.video.title}
                                {this.props.video.season != null && <span> S{this.props.video.season}</span>}
                                {this.props.video.episode != null && <span>E{this.props.video.episode} </span>}
                            </h4>
                        </a>
                        <h6 className="card-subtitle mb-2 text-muted"> {this.props.video.director.firstName} {this.props.video.director.lastName}</h6>
                        <StarRatings
                            rating={this.props.video.rating}
                            isSelectable={false}
                            starWidthAndHeight={'20px'}
                            isAggregateRating={false}
                            numOfStars={5}
                        />
                        <hr />
                        <p className="mb-3">
                            {this.props.video.description}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Thumbnail;