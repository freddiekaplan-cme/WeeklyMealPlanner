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
		<div className="my-8 font-bold">
			<div className="m-2">
				<span className="w-12 inline-block">Mon: </span>
				<span className="font-normal">{mon}</span>
			</div>
			<div className="m-2">
				<span className="w-12 inline-block">Tue: </span>
				<span className="font-normal">{tue}</span>
			</div>
			<div className="m-2">
				<span className="w-12 inline-block">Wed: </span>
				<span className="font-normal">{wed}</span>
			</div>
			<div className="m-2">
				<span className="w-12 inline-block">Thu: </span>
				<span className="font-normal">{thu}</span>
			</div>
			<div className="m-2">
				<span className="w-12 inline-block">Fri: </span>
				<span className="font-normal">{fri}</span>
			</div>
			<div className="m-2">
				<span className="w-12 inline-block">Sat: </span>
				<span className="font-normal">{sat}</span>
			</div>
			<div className="m-2">
				<span className="w-12 inline-block">Sun: </span>
				<span className="font-normal">{sun}</span>
			</div>
		</div>
	)
}

export default Week
