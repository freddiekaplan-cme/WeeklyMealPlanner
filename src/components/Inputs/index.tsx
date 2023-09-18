import React, { useState, useEffect } from "react"

interface InputsProps {
	inputValue: string
	onInputChange: (value: string) => void
	chooseList: (list: string) => void
	changeButtonText: (value: string) => void
}

function Inputs({
	inputValue,
	onInputChange,
	chooseList,
	changeButtonText,
}: InputsProps) {
	const [localInputValue, setLocalInputValue] = useState<string>("")

	useEffect(() => {
		setLocalInputValue(inputValue)
	}, [inputValue])

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	): void => {
		const newValue = e.target.value
		setLocalInputValue(newValue)
		onInputChange(newValue)
	}

	const clearInput = (): void => {
		setLocalInputValue("")
		onInputChange("")
		changeButtonText("setAsPlan")
	}

	return (
		<div>
			<h2>List your meals</h2>
			<p>
				<label htmlFor="myInput">
					List at least seven meals, separate with commas:
				</label>
			</p>
			<p>
				<input
					type="text"
					id="myInput"
					value={localInputValue}
					onChange={handleInputChange}
					placeholder="lasagna, salad, noodles"
				/>
				<button onClick={clearInput}>Clear</button>
			</p>
		</div>
	)
}

export default Inputs
