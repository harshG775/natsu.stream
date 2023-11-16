import "./section.css";
export default function Section(prop) {
	const { children, className } = prop;
	return (
		<section className='section'>
			<div
				{...prop}
				className={`${className} section-inner maxContainer`}
                >
				{children}
			</div>
		</section>
	);
}
