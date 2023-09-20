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
	const readableList = listArray.join(", ")

	const handleButtonClick = () => {
		chooseList(readableList)
		changeButtonText("setAsPlan")
	}

	return (
		<div className="py-4 max-w-xl">
			<h3 className="text-md font-bold">{listName}</h3>
			<p>{readableList}</p>
			<p>
				<button
					className="rounded-md mt-4 bg-amber-400 hover:bg-amber-300 w-36 h-12"
					onClick={handleButtonClick}
				>
					Use List
				</button>
			</p>
		</div>
	)
}

export default Lists
