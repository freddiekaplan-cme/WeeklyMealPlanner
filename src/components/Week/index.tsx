interface DayProp {
	mon: string | null
	tue: string | null
	wed: string | null
	thu: string | null
	fri: string | null
	sat: string | null
	sun: string | null
}

const Week = ({ mon, tue, wed, thu, fri, sat, sun }: DayProp) => {
	return (
		<>
			<div>{mon}</div>
			<div>{tue}</div>
			<div>{wed}</div>
			<div>{thu}</div>
			<div>{fri}</div>
			<div>{sat}</div>
			<div>{sun}</div>
		</>
	)
}

export default Week
