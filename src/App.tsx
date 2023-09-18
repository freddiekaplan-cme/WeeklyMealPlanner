import { useState } from "react"
import Header from "@/Header"
import Week from "@/Week"
import Inputs from "@/Inputs"
import Lists from "@/Lists"
import { vegetarian, cheap } from "../data/meal-lists"
import "./App.css"

function App() {
	const [meal, setMeal] = useState<string[]>(["", "", "", "", "", "", ""])
	const [inputValue, setInputValue] = useState<string>("")
	const buttonPlan = "Plan Your Week"
	const [buttonText, setButtonText] = useState<string>(buttonPlan)

	const shuffleArray = (array: string[]) => {
		const shuffledArray = [...array]

		// Fisher-Yates shuffle algorithm
		for (let i = shuffledArray.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1))
			;[shuffledArray[i], shuffledArray[j]] = [
				shuffledArray[j],
				shuffledArray[i],
			]
		}

		return shuffledArray
	}

	const changeButtonText = (listButton: string | null) => {
		inputValue !== "" ? setButtonText("Shuffle") : setButtonText(buttonPlan)
		listButton === "setAsPlan" ? setButtonText(buttonPlan) : listButton
	}

	const planWeek = (): void => {
		const inputMeals = inputValue
			.split(",")
			.map((meals: string) => `${meals.trim()}`)

		const shuffledMeals = shuffleArray(inputMeals)
		const filledMealArray = [
			...shuffledMeals,
			"",
			"",
			"",
			"",
			"",
			"",
		].slice(0, 7)

		setMeal(filledMealArray)
		changeButtonText("")
	}

	const handleInputChange = (newInputValue: string) => {
		setInputValue(newInputValue)
	}

	return (
		<>
			<Header title="Weekly Meal Planner" />
			<Week
				mon={"Monday: " + meal[0]}
				tue={"Tuesday: " + meal[1]}
				wed={"Wednesday: " + meal[2]}
				thu={"Thursday: " + meal[3]}
				fri={"Friday: " + meal[4]}
				sat={"Saturday: " + meal[5]}
				sun={"Sunday: " + meal[6]}
			/>
			<Inputs
				inputValue={inputValue}
				onInputChange={handleInputChange}
				chooseList={setInputValue}
				changeButtonText={changeButtonText}
			/>
			<button onClick={planWeek}>{buttonText}</button>

			<h2>Choose from existing lists</h2>
			<Lists
				listName={vegetarian.name}
				listArray={vegetarian.list}
				chooseList={handleInputChange}
				changeButtonText={changeButtonText}
			/>
			<Lists
				listName={cheap.name}
				listArray={cheap.list}
				chooseList={setInputValue}
				changeButtonText={changeButtonText}
			/>
		</>
	)
}

export default App
