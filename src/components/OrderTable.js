import React, { Component } from 'react';
import OrderData from './TableData';
import { connect } from 'react-redux';

class OrderTable extends Component{
    constructor(props){
        super(props);
    }
    renderHeader = () => {
        const data = this.props.orders
        
        if(typeof data !== 'undefined'){
            const header = Object.assign({}, data)
            let headerKeys = Object.keys(header[0]);
            if(typeof headerKeys !== 'undefined'){
                return headerKeys.map((key, index) => (<th key={index}>{key.toUpperCase()}</th>))
            }
        }
        
    }
    render(){
        return(
            
            <div>
                {
                    this.props.orders.length > 0 ? 
                    <table>
                        <tbody>
                            <tr>{this.renderHeader()}</tr>
                            <OrderData />
                        </tbody>
                    </table> : <p>No order for this week so far, check back later!</p>
                }
            </div>
        )
        
    }
}
const mapStateToProps = state => ({
    orders: state.orders
})
export default connect(mapStateToProps)(OrderTable);