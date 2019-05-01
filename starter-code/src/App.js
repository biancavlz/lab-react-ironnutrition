import React, { Component } from 'react'
import './App.css'
import JSONfood from './foods.json'
import FoodBox from './components/FoodBox'

class App extends Component {
    state = { food: JSONfood.slice() }
    render() {
        return (
            <div className="App">
                <FoodBox food={this.state.food} />
            </div>
        )
    }
}

export default App
