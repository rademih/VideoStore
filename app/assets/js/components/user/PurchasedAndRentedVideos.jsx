import React from 'react';
import UserPurchaseList from './UserPurchaseList.jsx';
import UserRentedList from './UserRentedList.jsx';
class PurchasedAndRentedVideos extends React.Component {
    render() {
        return (
            <div className="container">
                <nav className="nav nav-tabs" id="myTab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-purchases-tab" data-toggle="tab" href="#nav-purchases" role="tab" aria-controls="nav-purchases" aria-selected="false">Purchases</a>
                    <a className="nav-item nav-link" id="nav-rented-tab" data-toggle="tab" href="#nav-rented" role="tab" aria-controls="nav-rented" aria-selected="false">Renting</a>

                </nav>
                <div className="tab-content" id="nav-tabContent">                    
                    <div className="tab-pane fade" id="nav-purchases" role="tabpanel" aria-labelledby="nav-purchases-tab">
                        <br />
                       <UserPurchaseList />
                    </div>
                    <div className="tab-pane fade" id="nav-rented" role="tabpanel" aria-labelledby="nav-rented-tab">
                        <br />
                        <UserRentedList />
                    </div>
                </div>

            </div >
        )
    }
}
export default PurchasedAndRentedVideos;