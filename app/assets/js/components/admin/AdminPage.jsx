import React from 'react';
import VideoList from './VideoList.jsx';
import PurchaseList from './PurchaseList.jsx';
import RentedVideoList from './RentedVideoList.jsx';
class AdminPage extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="nav nav-tabs" id="myTab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-videos-tab" data-toggle="tab" href="#nav-videos" role="tab" aria-controls="nav-videos" aria-selected="true">Videos</a>
                    <a className="nav-item nav-link" id="nav-purchases-tab" data-toggle="tab" href="#nav-purchases" role="tab" aria-controls="nav-purchases" aria-selected="false">Purchases</a>
                    <a className="nav-item nav-link" id="nav-rented-tab" data-toggle="tab" href="#nav-rented" role="tab" aria-controls="nav-rented" aria-selected="false">Renting</a>

                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-videos" role="tabpanel" aria-labelledby="nav-videos-tab">
                        <br />
                        <a href="/admin/video/add" className="btn btn-primary"> Add Video </a>
                        <br />
                        <VideoList />
                    </div>
                    <div className="tab-pane fade" id="nav-purchases" role="tabpanel" aria-labelledby="nav-purchases-tab">
                        <br />
                        <PurchaseList />
                    </div>
                    <div className="tab-pane fade" id="nav-rented" role="tabpanel" aria-labelledby="nav-rented-tab">
                        <br />
                        <RentedVideoList />
                    </div>
                </div>

            </div >
        )
    }
}
export default AdminPage;