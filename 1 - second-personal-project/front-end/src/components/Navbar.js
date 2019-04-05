import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class Navbar extends Component {
    state = {
        filter: ''
    }

    setFilter = (pagename) => {
        this.setState({
            filter: pagename
        })
    }

    render() {

        if (this.state.filter === 'Characters') {
            this.setFilter('')
            return <Redirect to="/characters" />
        } else if (this.state.filter === 'Locations') {
            this.setFilter('')
            return <Redirect to="/locations" />
        } else if (this.state.filter === 'Abilities') {
            this.setFilter('')
            return <Redirect to="/abilities" />
        } else if (this.state.filter === 'Items') {
            this.setFilter('')
            return <Redirect to="/items" />
        }

        return (

            <nav className="container-fluid navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand nav-link" href="/"> <h2>Adventure Compendium</h2> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">


                        <li className="nav-item dropdown">
                
                            <select className='btn btn-dark nav-link dropdown-toggle btn-lg' href="#" id="navbarDropdown" onChange={(e) => this.setFilter(e.target.value)} >
                                <option>Filter by Category</option>
                                <option>Characters</option>
                                <option>Locations</option>
                                <option>Abilities</option>
                                <option>Items</option>
                            </select>
                        </li>

                        <li className="nav-item">
                            <Link to="/creator" className="nav-link" > <h4>Create Content</h4> </Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to="/Adventures" className="nav-link" > <h4>Adventures</h4> </Link>
                        </li>
                    </ul>

                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Navbar;
