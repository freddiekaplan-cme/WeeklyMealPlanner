import React, { useState } from "react"

function Inputs({ onInputChange }: { onInputChange: (value: string) => void }) {
	const [inputValue, setInputValue] = useState<string>("")

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement>,
	): void => {
		const newValue = e.target.value
		setInputValue(newValue)
		onInputChange(newValue)
	}

	const clearInput = (): void => {
		setInputValue("")
		onInputChange("")
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
					value={inputValue}
					onChange={handleInputChange}
					placeholder="lasagna, salad, noodles"
				/>
				<button onClick={clearInput}>Clear</button>
			</p>
		</div>
	)
}

export default Inputs
