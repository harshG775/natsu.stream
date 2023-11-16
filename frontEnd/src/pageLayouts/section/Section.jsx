import "./section.css";
export default function Section(prop) {
	const { children, className="",S_className="" } = prop;
	return (
		<section className={`${S_className}`}>
			<div
				{...prop}
				className={`${className} section-inner maxContainer`}
                >
				{children}
			</div>
		</section>
	);
}
