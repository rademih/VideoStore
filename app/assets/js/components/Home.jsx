import React from 'react';
import Tabs from './Tabs.jsx';
class Home extends React.Component {
    constructor() {
        super();
        this.handleChangeSearch = this.handleChangeSearch.bind(this);
        this.handleChangeSort = this.handleChangeSort.bind(this);
        this.state = {
            search: '',
            sort: 'rating'
        };
    }
    handleChangeSearch(event) {
        this.setState({
            search: this.search.value
        });

    }
    handleChangeSort(event) {
        this.setState({
            sort: event.target.value
        });
    }
    render() {
        return (
            <div>
                <div className="container">
                    <form>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="form-group">
                                    <label>Search</label>
                                    <input type="text " className="form-control form-control-lg" onChange={this.handleChangeSearch} name="search" placeholder="Search" ref={(input) => this.search = input}></input>
                                </div>
                            </div>

                            <div className="col-md-3">
                                <div className="form-group">
                                    <label>Sort by</label>
                                    <select className="form-control form-control-lg " name="sort" value={this.state.sort} onChange={this.handleChangeSort}>
                                        <option value="rating">Rating</option>
                                        <option value="date">Date</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="form-group">
                                    <br/>
                                    <a type="button" className="btn btn-primary btn-lg btn-videos" href="/user/purchased_rented">Purchased/rented videos</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <Tabs search={this.state.search} sort={this.state.sort} />
            </div>
        )
    }
}
export default Home;