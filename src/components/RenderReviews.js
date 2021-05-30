import React from 'react';
import {database} from '../firebase/firebase';

class  RenderReviews extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            reviews: []
        }
    }
    componentDidMount(){
        database.ref('data/reviews').once('value').then((snapshot) => {
            const reviewData = [];
            snapshot.forEach((childSnapshot) => {
                reviewData.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
                this.setState({
                    reviews: reviewData
                })
            })
        })
    }
    render(){
        const dataList = this.state.reviews
        return (
            <div>
                <h2>What customers say about us.</h2>
                reviews: {this.state.reviews.length}
                {dataList.length < 1 && <p>No reviews yet!</p>}
                {dataList.map((item) => 
                    <div key={item.id}>
                        {item.name} {" "} {item.message} {" "} {item.city}
                    </div>
                )}
            </div>
        )
    }
}

export default RenderReviews;