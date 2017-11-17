import React from 'react';
import axios from 'axios';
class AddVideo extends React.Component {
    constructor() {
        super();
        this.handleChangeTypeOfVideo = this.handleChangeTypeOfVideo.bind(this);
        this.handleChangeDirector = this.handleChangeDirector.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            typeOfVideo: 'movie',
            directors: [],
            director: ''

        };
    }
    componentDidMount() {
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
            director: event.target.value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        if (this.state.typeOfVideo == 'movie') {
            axios.post('/api/v1/movie', {
                title: this.title.value,
                director: {id: this.state.director},
                releaseDate: new Date(this.date.value),
                duration: this.duration.value,
                rentalPrice: this.rentalPrice.value,
                purchasePrice: this.purchasePrice.value,
                rating: this.rating.value,
                boxOffice: this.boxOffice.value,
                description: this.description.value
            })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    alert(error);
                });
        }
        else {
            axios.post('/api/v1/tvShow', {
                title: this.title.value,
                director: {id: this.state.director},
                releaseDate: new Date(this.date.value),
                duration: this.duration.value,
                rentalPrice: this.rentalPrice.value,
                purchasePrice: this.purchasePrice.value,
                rating: this.rating.value,
                season: this.season.value,
                episode: this.episode.value,
                description: this.description.value
            })
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
                        <label htmlFor="exampleFormControlSelect1">Type of video</label>
                        <select className="form-control form-control" value={this.state.typeOfVideo} onChange={this.handleChangeTypeOfVideo}>
                            <option value="movie">Movie</option>
                            <option value="tvShow">Tv show</option>
                        </select>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input type="text" className="form-control" id="title" ref={(input) => this.title = input} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Director</label>
                        <select className="form-control form-control" value={this.state.director} onChange={this.handleChangeDirector}>
                            <option></option>
                            {
                                this.state.directors.map(
                                    director => <option key={director.id} value={director.id}>{director.firstName} {director.lastName}</option>
                                )}
                        </select>

                    </div>
                    <div className="form-group">
                        <label htmlFor="">Release date</label>
                        <input type="text" className="form-control" id="date" ref={(input) => this.date = input} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Duration</label>
                        <input type="text" className="form-control" id="duration" ref={(input) => this.duration = input} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Rental price</label>
                        <input type="text" className="form-control" id="rentalPrice" ref={(input) => this.rentalPrice = input} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Purchase price</label>
                        <input type="text" className="form-control" id="purchasePrice" ref={(input) => this.purchasePrice = input} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Rating</label>
                        <input type="text" className="form-control" id="rating" ref={(input) => this.rating = input} />
                    </div>

                    {this.state.typeOfVideo == 'movie' &&
                        <div className="form-group">
                            <label htmlFor="">Box office</label>
                            <input type="text" className="form-control" id="boxOffice" ref={(input) => this.boxOffice = input} />
                        </div>
                    }

                    {
                        this.state.typeOfVideo == 'tvShow' &&
                        <div className="form-group">
                            <label htmlFor="">Season</label>
                            <input type="text" className="form-control" id="season" ref={(input) => this.season = input} />
                        </div>
                    }

                    {
                        this.state.typeOfVideo == 'tvShow' &&
                        <div className="form-group">
                            <label htmlFor="">Episode</label>
                            <input type="text" className="form-control" id="episode" ref={(input) => this.episode = input} />
                        </div>
                    }

                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea className="form-control" ref={(input) => this.description = input} rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Create</button>
                </form>
            </div>
        )
    }
}
export default AddVideo;