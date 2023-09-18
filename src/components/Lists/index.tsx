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
		<>
			<h3>{listName}</h3>
			<p>{readableList}</p>
			<p>
				<button onClick={handleButtonClick}>Use List</button>
			</p>
		</>
	)
}

export default Lists
