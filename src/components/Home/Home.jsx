import React, {Component} from "react";
import Form from "../Form/Form";
import ParentCard from "../ParentCard/ParentCard";
import"../Home/Home.css";

class Home extends Component {
    state = {
        value: ''
    }

    handleValue = (newValue) => {
        this.setState({
            value: newValue
        })
    }
    
    componentDidMount() {
        alert("Tugas RPLBK Kelompok 34");
    }

    render() {
        return(
            <div className="home">
                <h1>Aplikasi penghitung keberuntungan</h1>
                <p>Hitung tingkat keberuntunganmu dibawah ini!</p>
                <Form name={(value) => this.handleValue(value)}/>
                <p>{this.state.value} <ParentCard /></p>
            </div>
        )
    }
}

export default Home;