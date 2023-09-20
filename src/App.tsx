import { useState } from "react"
import Header from "@/Header"
import Week from "@/Week"
import Inputs from "@/Inputs"
import Lists from "@/Lists"
import Footer from "@/Footer"
import { vegetarian, cheap, popular } from "../data/meal-lists"

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
		<div>
			<div className="font-dm px-8 md:px-12 text-amber-950 bg-amber-50">
				<Header
					title="Weekly Meal Planner"
					subtitle="~ What's for dinner tonight? ~"
				/>
				<Week
					mon={meal[0]}
					tue={meal[1]}
					wed={meal[2]}
					thu={meal[3]}
					fri={meal[4]}
					sat={meal[5]}
					sun={meal[6]}
				/>
				<Inputs
					inputValue={inputValue}
					onInputChange={handleInputChange}
					chooseList={setInputValue}
					changeButtonText={changeButtonText}
				/>
				<button
					className="rounded-md mt-4 hover:bg-green-500 w-36 h-12 bg-green-600 text-white"
					onClick={planWeek}
				>
					{buttonText}
				</button>

				<h2 className="text-lg mt-8 font-bold">
					Choose from existing lists
				</h2>
				<Lists
					listName={popular.name}
					listArray={popular.list}
					chooseList={handleInputChange}
					changeButtonText={changeButtonText}
				/>
				<Lists
					listName={vegetarian.name}
					listArray={vegetarian.list}
					chooseList={setInputValue}
					changeButtonText={changeButtonText}
				/>
				<Lists
					listName={cheap.name}
					listArray={cheap.list}
					chooseList={setInputValue}
					changeButtonText={changeButtonText}
				/>
			</div>
			<Footer />
		</div>
	)
}

export default App
