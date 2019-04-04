import React, { Component } from 'react';


class AdventureProfile extends Component {
    state = {
        adventures: [],
        editing: false,
    }

    // componentDidMount() {
    //     this.getAdventureByID(this.props.match.params.id)
    // }
    // getAdventureByID = (id) => {
    //     axios.get(`http://localhost:5000/adventures/${id}`)
    //         .then(res => {
    //             this.setState({
    //                 adventures: res.data
    //             })
    //         })
    // }


    componentDidMount() {
        this.props.getAdventureByID(this.props.match.params.id)
    }


    render() {
        return (
            <div className="container">
                <table className="table table-striped table-bordered">
                    <thead>
                        <img src={this.state.elements.image} alt=""/>
                    </thead>
                    <tbody>


                        
                    </tbody>





                </table>
            </div>
        );
    }
}

export default AdventureProfile;