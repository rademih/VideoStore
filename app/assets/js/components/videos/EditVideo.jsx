import React from 'react';
import axios from 'axios';
class EditVideo extends React.Component {
    constructor() {
        super();
        this.handleChangeTypeOfVideo = this.handleChangeTypeOfVideo.bind(this);
        this.handleChangeDirector = this.handleChangeDirector.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeReleaseDate = this.handleChangeReleaseDate.bind(this);
        this.handleChangeDuration = this.handleChangeDuration.bind(this);
        this.handleChangeRentalPrice = this.handleChangeRentalPrice.bind(this);
        this.handleChangePurchasePrice = this.handleChangePurchasePrice.bind(this);
        this.handleChangeRating = this.handleChangeRating.bind(this);
        this.handleChangeBoxOffice = this.handleChangeBoxOffice.bind(this);
        this.handleChangeSeason = this.handleChangeSeason.bind(this);
        this.handleChangeEpisode = this.handleChangeEpisode.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            typeOfVideo: '',
            directors: [],
            director: '',
            video: {},
            date: '',
            directorId: '',
            title: '',
            duration: '',
            season: '',
            epissode: '',
            description: '',
            rentalPrice: '',
            purchasePrice: '',
            boxOffice: '',
            id: '',
            rating: ''

        };
    }
    componentDidMount() {
        axios.get('/api/v1/video/' + this.props.match.params.id)
            .then(res => {
                const video = res.data;
                this.setState({ video });
                if (this.state.video.episode != null && this.state.video.episode != null) {
                    this.setState({
                        typeOfVideo: 'tvShow'
                    });
                }
                else {
                    this.setState({ typeOfVideo: 'movie' });
                }
                this.setState({});
                this.setState({
                    date: new Date(this.state.video.releaseDate).toLocaleDateString(),
                    directorId: this.state.video.director.id,
                    id: this.state.video.id,
                    title: this.state.video.title,
                    duration: this.state.video.duration,
                    rentalPrice: this.state.video.rentalPrice,
                    purchasePrice: this.state.video.purchasePrice,
                    rating: this.state.video.rating,
                    boxOffice: this.state.video.boxOffice,
                    season: this.state.video.season,
                    episode: this.state.video.episode,
                    description: this.state.video.description
                })
            });
        axios.get('/api/v1/directors')
            .then(res => {
                const directors = res.data;
                this.setState({ directors });
            });


    }
    handleChangeTypeOfVideo(event) {
        this.setState({
            typeOfVideo: event.target.value
        });
    }
    handleChangeDirector(event) {
        this.setState({
            directorId: event.target.value
        });
    }
    handleChangeTitle(event) {
        this.setState({

            title: event.target.value

        });
    }
    handleChangeReleaseDate(event) {
        this.setState({

            releaseDate: event.target.value

        });
    }
    handleChangeDuration(event) {
        this.setState({

            duration: event.target.value

        });
    }
    handleChangeRentalPrice(event) {
        this.setState({

            rentalPrice: event.target.value

        });
    }
    handleChangePurchasePrice(event) {
        this.setState({

            purchasePrice: event.target.value

        });
    }
    handleChangeRating(event) {
        this.setState({

            rating: event.target.value

        });
    }
    handleChangeBoxOffice(event) {
        this.setState({

            boxOffice: event.target.value

        });
    }
    handleChangeSeason(event) {
        this.setState({

            season: event.target.value

        });
    }
    handleChangeEpisode(event) {
        this.setState({

            episode: event.target.value

        });
    }
    handleChangeDescription(event) {
        this.setState({
            description: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.typeOfVideo == 'movie') {

            const movie = {
                id: this.state.video.id,
                title: this.state.title,
                director: { id: this.state.directorId },
                releaseDate: new Date(this.state.date),
                duration: this.state.duration,
                rentalPrice: this.state.rentalPrice,
                purchasePrice: this.state.purchasePrice,
                rating: this.state.rating,
                boxOffice: this.state.boxOffice,
                description: this.state.description
            };
            console.log(movie);
            axios.put('/api/v1/movie', movie)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    alert(error);
                });
        }
        else {
            const tvShow = {
                id: this.state.video.id,
                title: this.state.title,
                director: { id: this.state.directorId },
                releaseDate: new Date(this.state.date),
                duration: this.state.duration,
                rentalPrice: this.state.rentalPrice,
                purchasePrice: this.state.purchasePrice,
                rating: this.state.rating,
                season: this.state.season,
                episode: this.state.episode,
                description: this.state.description
            };
            axios.put('/api/v1/tvShow',tvShow)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }

    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="video-form">
                    <div className="form-group">
                        <label>Type of video</label>
                        <select className="form-control form-control" value={this.state.typeOfVideo} onChange={this.handleChangeTypeOfVideo}>
                            <option value="movie">Movie</option>
                            <option value="tvShow">Tv show</option>
                        </select>
                    </div>
                    {this.state.director}
                    <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input type="text" className="form-control" id="title" value={this.state.title} onChange={this.handleChangeTitle} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Director</label>

                        <select className="form-control form-control" value={this.state.directorId} onChange={this.handleChangeDirector}>
                            <option></option>
                            {
                                this.state.directors.map(
                                    director => <option key={director.id} value={director.id}>{director.firstName} {director.lastName}</option>
                                )}
                        </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="">Release date</label>
                        <input type="text" className="form-control" id="date" value={this.state.date} onChange={this.handleChangeReleaseDate} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Duration</label>
                        <input type="text" className="form-control" id="duration" value={this.state.duration} onChange={this.handleChangeDuration} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Rental price</label>
                        <input type="text" className="form-control" id="rentalPrice" value={this.state.rentalPrice} onChange={this.handleChangeRentalPrice} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Purchase price</label>
                        <input type="text" className="form-control" id="purchasePrice" value={this.state.purchasePrice} onChange={this.handleChangePurchaseDate} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Rating</label>
                        <input type="text" className="form-control" id="rating" value={this.state.rating} onChange={this.handleChangeRating} />
                    </div>

                    {this.state.typeOfVideo == 'movie' &&
                        <div className="form-group">
                            <label htmlFor="">Box office</label>
                            <input type="text" className="form-control" id="boxOffice" value={this.state.boxOffice} onChange={this.handleChangeBoxOffice} />
                        </div>
                    }

                    {
                        this.state.typeOfVideo == 'tvShow' &&
                        <div className="form-group">
                            <label htmlFor="">Season</label>
                            <input type="text" className="form-control" id="season" value={this.state.season} onChange={this.handleChangeSeason} />
                        </div>
                    }

                    {
                        this.state.typeOfVideo == 'tvShow' &&
                        <div className="form-group">
                            <label htmlFor="">Episode</label>
                            <input type="text" className="form-control" id="episode" value={this.state.episode} onChange={this.handleChangeEpisode} />
                        </div>
                    }


                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea className="form-control" value={this.state.description} rows="3" onChange={this.handleChangeDescription}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Edit</button>
                </form>
            </div>
        )
    }
}
export default EditVideo;