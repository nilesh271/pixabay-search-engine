import React, { Component } from 'react'
import TextField from "material-ui/TextField";
import { connect } from 'react-redux'
import { fetchImages } from "../../actions/search";

class Search extends Component {
    onSearchTextChange = (e) => {
        this.props.dispatch(fetchImages(e.target.value))
    } 

    render(){
        return (
            <div>
                <TextField 
                    id={"searchBox"}
                    name="searchText"
                    onChange={this.onSearchTextChange}
                    value={this.props.search.searchText}
                    autoFocus={true}
                    fullWidth={true}
                    placeholder="Search Here"
                />
            </div>
        )    
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.search
    }
}

export default connect(mapStateToProps)(Search)