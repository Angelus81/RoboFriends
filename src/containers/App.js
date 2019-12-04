import React, { Component }from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { robots } from './robots';
import '../containers/App.css';


class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: robots,
			searchfield: ''
		}
	}

	onSearchChange = (event) => {	
		this.setState({ searchfield: event.target.value })	
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robots =>{
			return robots.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		return (
		<div className='tc'>
		<h1 className='f2'>RoboFriends</h1>
		<SearchBox searchChange={this.onSearchChange}/>
		<Scroll> 
		<CardList robots={filteredRobots}/>
		</Scroll>
		</div>

		);
	}
}

export default App;

// state >> props (state is parent props is child)
// state - description of your application
// adding a scroll function - create a new file called Scroll.js 
// ../folder name to add files