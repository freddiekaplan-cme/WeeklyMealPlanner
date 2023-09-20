interface TitleProp {
	title: string
	subtitle: string
}

const Header = ({ title, subtitle }: TitleProp) => {
	return (
		<div className="font-satisfy pt-8 sm:pt-12 text-center">
			<h1 className="font-satisfy text-3xl sm:text-5xl text-green-700 font-bold">
				{title}
			</h1>
			<h2 className="font-satisfy text-lg sm:text-2xl text-center my-2 sm:my-4 text-amber-500">
				{subtitle}
			</h2>
		</div>
	)
}

export default Header
