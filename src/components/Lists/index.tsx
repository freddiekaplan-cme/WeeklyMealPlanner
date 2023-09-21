import { useState } from "react"

interface ListProps {
	listName: string
	listArray: string[]
	chooseList: (value: string) => void
	changeButtonText: (value: string) => void
}

const Lists = ({
	listName,
	listArray,
	chooseList,
	changeButtonText,
}: ListProps) => {
	const [hiddenList, setHiddenList] = useState<boolean>(false)
	const readableList = listArray.join(", ")

	const handleButtonClick = () => {
		chooseList(readableList)
		changeButtonText("setAsPlan")
	}

	const toggleHiddenList = (): void => {
		setHiddenList(!hiddenList)
	}

	return (
		<div className="pt-4">
			<button
				className="rounded-md mt-4 text-white bg-amber-500 hover:bg-amber-400 w-36 h-12"
				onClick={handleButtonClick}
			>
				{listName}
			</button>
			<div
				onClick={toggleHiddenList}
				className="mt-2 text-xs cursor-pointer"
			>
				Show dishes
			</div>
			<p
				className={`transition-all duration-700 ease-in-out overflow-hidden mt-4 ${
					hiddenList ? "h-full opacity-100" : "h-0 opacity-0"
				}`}
			>
				{readableList}
			</p>
		</div>
	)
}

export default Lists
