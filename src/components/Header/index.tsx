interface TitleProp {
	title: string
}

const Header = ({ title }: TitleProp) => {
	return (
		<>
			<h1>{title}</h1>
		</>
	)
}

export default Header
