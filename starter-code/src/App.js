import React, { Component } from 'react'
import './App.css'
import JSONfood from './foods.json'
import FoodBox from './components/FoodBox'
import FoodForm from './components/FoodForm'

class App extends Component {
    state = { food: JSONfood.slice() }
    render() {
        return (
            <div className="App">
                <FoodForm />
                <FoodBox food={this.state.food} />
            </div>
        )
    }
}

export default App
