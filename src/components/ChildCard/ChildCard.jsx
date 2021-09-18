import React, {Component} from "react";

class ChildCard extends Component {
    state = {
        order: 4
    }

    handleGachaRate = (newValue) => {
        this.props.gachaRate(newValue);
    }

    handleBtn = () => {
        this.setState({
            order: Math.floor(Math.random() * 101)
        }, () => {
            this.handleGachaRate(this.state.order);
        })

        
    }

    render(){
        return(
            <div className="child">
                <button onClick={this.handleBtn}>cek</button>
            </div>
        )
    }
}

export default ChildCard;