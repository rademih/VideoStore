import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './components/Home.jsx';
import RegisterForm from './components/RegisterForm.jsx';
import AdminPage from './components/admin/AdminPage.jsx';
import LoginForm from './components/LoginForm.jsx';
import AddVideo from './components/videos/AddVideo.jsx';
import PurchasedAndRentedVideos from './components/user/PurchasedAndRentedVideos.jsx';
import VideoDetails from './components/videos/VideoDetails.jsx';
import EditVideo from './components/videos/EditVideo.jsx';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/admin" component={AdminPage} />
                    <Route path="/admin/video/add" component={AddVideo} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/register" component={RegisterForm} />
                    <Route path="/user/purchased_rented" component={PurchasedAndRentedVideos} />
                    <Route path="/video/details/:id" component={VideoDetails} />
                    <Route path="/video/edit/:id" component={EditVideo} />
                    <Redirect to="/" />
                </Switch>
            </div>
        )
    }
}
ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById("app"));





