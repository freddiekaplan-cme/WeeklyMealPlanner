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
	const [isHidden, setIsHidden] = useState(true)

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

	const changeButtonText = (): void => {
		inputValue !== "" ? setButtonText("Shuffle") : setButtonText(buttonPlan)

		if (buttonText === buttonPlan && inputValue !== "") {
			toggleHidden(false)
		}
	}

	const toggleHidden = (value: boolean) => {
		setIsHidden(value)
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
		changeButtonText()
	}

	const handleInputChange = (newInputValue: string) => {
		setInputValue(newInputValue)
	}

	return (
		<div>
			<div className="font-dm px-8 md:px-12 text-amber-950 bg-amber-50 pb-8">
				<Header
					title="Weekly Meal Planner"
					subtitle="~ What's for dinner next week? ~"
				/>
				<div
					className={`text-center p-14 text-9xl ${
						isHidden ? "" : "hidden"
					}`}
				>
					🍽️
				</div>
				<div className={`${isHidden ? "hidden" : ""}`}>
					<Week
						mon={meal[0]}
						tue={meal[1]}
						wed={meal[2]}
						thu={meal[3]}
						fri={meal[4]}
						sat={meal[5]}
						sun={meal[6]}
					/>
				</div>
				<div className="flex sm:justify-center">
					<div className="flex-col max-w-xl">
						<Inputs
							inputValue={inputValue}
							onInputChange={handleInputChange}
							chooseList={setInputValue}
							changeButtonText={changeButtonText}
							toggleHidden={toggleHidden}
						/>
						<button
							className="rounded-md mt-4 hover:bg-green-500 w-36 h-12 bg-green-600 text-white"
							onClick={planWeek}
						>
							{buttonText}
						</button>

						<h2 className="text-lg mt-8 font-bold">Pick a list</h2>
						<p>
							Get your meals from a premade list of dishes. Edit
							the list in the text field if you want to. Hit the
							Plan button when you're ready.
						</p>
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
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default App
