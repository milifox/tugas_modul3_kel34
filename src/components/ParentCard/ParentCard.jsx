import React, {Component, Fragment} from "react";
import ChildCard from "../ChildCard/ChildCard";

class ParentCard extends Component {
    state = {
        order: null
    }

    handleGachaRate = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render(){
        return(
            <Fragment>
                <div className="parent">
                    <p>Tingkat kelaksekanmu adalah {this.state.order} %</p>   
                </div>
                <ChildCard gachaRate={(value) => this.handleGachaRate(value)}/>
            </Fragment>
        )
    }
}

export default ParentCard;