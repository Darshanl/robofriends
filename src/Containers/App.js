import React, {Component} from 'react';
import {connect} from 'react-redux';
import { setSearchField,requestRobots } from '../action';

import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/scroll';


const mapStateToProps = state => {
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobot.robots,
        isPending: state.requestRobot.isPending,
        error:state.requestRobot.error
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: () => dispatch(requestRobots())  
    }
}

class App extends Component{

    componentDidMount(){
        this.props.onRequestRobots();
    }

    render(){
        const {searchField , onSearchChange, robots } = this.props;
        const filterRobots = robots.filter(robo => {
            return robo.name.toLowerCase().includes(searchField.toLowerCase())
        })
        return(
            <div className="tc">
                <h1 className="f2">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange}/>
                <Scroll>
                    <CardList robots = {filterRobots} />
                </Scroll> 
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);