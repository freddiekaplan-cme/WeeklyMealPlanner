interface ListProps {
	listName: string
	listArray: string[]
}

const Lists = ({ listName, listArray }: ListProps) => {
	const readableList = listArray.map((item, index) => {
		if (index !== listArray.length - 1) {
			return `${item}, `
		}
		return item
	})

	const useList = (): void => {}

	return (
		<>
			<h3>{listName}</h3>
			<p>{readableList}</p>
			<p>
				<button onClick={useList}>Plan with this list</button>
			</p>
		</>
	)
}

export default Lists
