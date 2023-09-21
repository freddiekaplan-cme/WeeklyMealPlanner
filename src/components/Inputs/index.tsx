import React, { useState, useEffect } from "react"

interface InputsProps {
	inputValue: string
	onInputChange: (value: string) => void
	changeButtonText: (value: string) => void
	toggleHidden: (value: boolean) => void
}

function Inputs({
	inputValue,
	onInputChange,
	changeButtonText,
	toggleHidden,
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
		toggleHidden(true)
	}

	return (
		<div>
			<h2 className="text-lg font-bold">Your favourite dishes</h2>
			<p>
				<label htmlFor="myInput">
					Write or paste a list of at least seven dishes, separate
					with commas:
				</label>
			</p>
			<div className="mt-4 h-10 flex items-center sm:max-w-xl">
				<input
					className="rounded-md border-green-800 border-2 p-2 h-full flex-grow "
					type="text"
					id="myInput"
					value={localInputValue}
					onChange={handleInputChange}
					placeholder="lasagna, salad, noodles"
				/>
				<button
					className="text-sm rounded-md ml-2 hover:bg-red-400 p-2 bg-red-500 text-white h-full flex-grow-0"
					onClick={clearInput}
				>
					Clear
				</button>
			</div>
		</div>
	)
}

export default Inputs
