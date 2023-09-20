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
		<div className="flex sm:justify-center">
			<div className="my-8 font-bold sm:max-w-sm flex flex-col">
				<div className="my-2">
					<span className="w-20 inline-block text-xs">Monday</span>
					<span className="font-normal">{mon}</span>
				</div>
				<div className="my-2">
					<span className="w-20 inline-block text-xs">Tuesday</span>
					<span className="font-normal">{tue}</span>
				</div>
				<div className="my-2">
					<span className="w-20 inline-block text-xs">Wednesday</span>
					<span className="font-normal">{wed}</span>
				</div>
				<div className="my-2">
					<span className="w-20 inline-block text-xs">Thursday</span>
					<span className="font-normal">{thu}</span>
				</div>
				<div className="my-2">
					<span className="w-20 inline-block text-xs">Friday</span>
					<span className="font-normal">{fri}</span>
				</div>
				<div className="my-2">
					<span className="w-20 inline-block text-xs">Saturday</span>
					<span className="font-normal">{sat}</span>
				</div>
				<div className="my-2">
					<span className="w-20 inline-block text-xs">Sunday</span>
					<span className="font-normal">{sun}</span>
				</div>
			</div>
		</div>
	)
}

export default Week
