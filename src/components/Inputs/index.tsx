import React, { useState, useEffect } from "react"

interface InputsProps {
	inputValue: string
	onInputChange: (value: string) => void
	changeButtonText: (value: string) => void
	toggleHidden: (value: boolean) => void
	handleEnterPress: () => void
}

function Inputs({
	inputValue,
	onInputChange,
	changeButtonText,
	toggleHidden,
	handleEnterPress,
}: InputsProps) {
	const [localInputValue, setLocalInputValue] = useState<string>("")
	const [textareaKey, setTextareaKey] = useState<number>(0)

	useEffect(() => {
		setLocalInputValue(inputValue)
	}, [inputValue])

	const handleInputChange = (
		e: React.ChangeEvent<HTMLTextAreaElement>,
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
		setTextareaKey((prevKey) => prevKey + 1)
	}

	const handleKeyDown = (
		e: React.KeyboardEvent<HTMLTextAreaElement>,
	): void => {
		if (e.key === "Enter") {
			handleEnterPress()
		}
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
			<div className="mt-4 flex items-center sm:max-w-xl">
				<textarea
					key={textareaKey}
					className="rounded-md h-10 border-green-800 border-2 p-2  flex-grow overflow-auto block"
					id="myInput"
					value={localInputValue}
					onChange={handleInputChange}
					onKeyDown={handleKeyDown}
					placeholder="lasagna, salad, noodles"
				/>
				<button
					className="text-sm drop-shadow-md rounded-md ml-2 hover:bg-red-400 p-2 bg-red-500 text-white h-full flex-grow-0"
					onClick={clearInput}
				>
					Clear
				</button>
			</div>
		</div>
	)
}

export default Inputs
