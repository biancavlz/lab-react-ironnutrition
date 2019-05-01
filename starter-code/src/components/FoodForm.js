import React from 'react'
import JSONfood from '../foods.json'

class FoodForm extends React.Component {
    state = {
        form: false,
        newFoodName: '',
        newFoodImg: '',
        NewCalories: 0,
        JSONfood
    }

    // Displays the Form
    handleClick = () => {
        this.setState({
            form: true
        })
    }

    handleChange = event => {
        const { name, value } = event.target
        console.log(event)
        console.log(event.target.name) //=> newFoodName
        console.log(event.target.value) //=> typed value
        this.setState({
            [name]: value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        const foods = this.state.JSONfood.slice()
        const { newFoodName, newFoodImg, NewCalories } = this.state
        foods.unshift({
            name: newFoodName,
            image: newFoodImg,
            calories: NewCalories
        })
        // sets the form to false and pass the new list of food
        this.setState({
            form: false,
            JSONfood: foods
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Add Food</button>
                {/* when the form sets to true will display the form */}
                {this.state.form && (
                    <form onSubmit={this.handleSubmit}>
                        <label for="name">Name</label>
                        <input
                            className="input"
                            onChange={this.handleChange}
                            name="newFoodName"
                            type="text"
                            value={this.state.newFoodName}
                            placeholder="tomato"
                        />
                        <label for="calories">Number of Calories</label>
                        <input
                            className="input"
                            onChange={this.handleChange}
                            type="number"
                            name="NewCalories"
                            value={this.state.NewCalories}
                            placeholder="40"
                        />
                        <label for="image">Image URL</label>
                        <input
                            className="input"
                            onChange={this.handleChange}
                            name="newFoodImg"
                            type="text"
                            value={this.state.newFoodImg}
                            placeholder="https://i.imgur.com/5ktcSzF.jpg"
                        />
                        <input type="submit" value="add" />
                    </form>
                )}
            </div>
        )
    }
}
export default FoodForm
