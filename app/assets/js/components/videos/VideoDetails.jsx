import React from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
class VideoDetails extends React.Component {
    constructor(props) {
        super(props);
        this.handleClickRent = this.handleClickRent.bind(this);
        this.handleClickBuy = this.handleClickBuy.bind(this);
        this.handleClickX = this.handleClickX.bind(this);
        this.state = {
            video: {},
            alertVisible: false
        };
    }
    componentDidMount() {
        axios.get('/api/v1/video/'+this.props.match.params.id)
            .then(res => {
                const video = res.data;
                this.setState({ video });
               });
    }
    handleClickBuy(event) {

        axios.post('/api/v1/video/purchase', {
            video: { id: this.state.video.id },
            user: { id: 2 },
            date: new Date()
        })
            .then(function (response) {
                
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
            this.setState({ alertVisible: true });
        
    }
    handleClickRent(event) {

        axios.post('/api/v1/video/rent', {
            video: { id: this.state.video.id },
            user: { id: 2 },
            date: new Date()
        })
            .then(function (response) {
                console.log(response);
               
            })
            .catch(function (error) {
                console.log(error);
            });
            this.setState({ alertVisible: true });
        
    }
    handleClickX(event){
        this.setState({ alertVisible: false });
    }
    render() {
        const date = new Date(this.state.video.releaseDate);
        return (
            <div className="container details">
                {this.state.alertVisible &&
                    <div className="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>Action proceeded!</strong>
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={this.handleClickX}>
                            <span aria-hidden="true" >&times;</span>
                        </button>
                    </div>
                }
                <div className="row">
                    <div className="col-md-4">
                        <img className="card-img-top" src="https://www.gumtree.com/static/1/resources/assets/rwd/images/orphans/a37b37d99e7cef805f354d47.noimage_thumbnail.png" alt="Card image cap"></img>
                    </div>
                    <div className="col-md-8">
                        <h1>Title: {this.state.video.title}
                            <span>{this.state.video.season != null && <span> S{this.state.video.season}</span>}</span>
                            <span> {this.state.video.episode != null && <span>E{this.state.video.episode} </span>} </span>
                        </h1>
                        <StarRatings
                            rating={this.state.video.rating}
                            isSelectable={false}
                            starWidthAndHeight={'30px'}
                            isAggregateRating={false}
                            numOfStars={5}
                        />
                        <br />
                        <br />
                        <h5>Release date: {date.toLocaleDateString()} </h5>
                        <h5>Duration: {this.state.video.duration}</h5>
                        <h5> {this.state.video.boxOffice != null && <span>Box office: {this.state.video.boxOffice} </span>}</h5>
                        <h5>Purchase price: {this.state.video.purchasePrice}</h5>
                        <h5>Rental price: {this.state.video.rentalPrice}</h5>
                        <h6> Description:<br /> {this.state.video.description}</h6>
                        <br />
                        <br />
                        <button className="btn btn-primary btn-lg button-buy" onClick={this.handleClickRent}>Rent</button>
                        <button className="btn btn-primary btn-lg button-buy" onClick={this.handleClickBuy}>Buy</button>
                    </div>
                </div>
            </div >

        )
    }
}
export default VideoDetails;