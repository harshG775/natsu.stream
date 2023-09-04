
import "./navPagination.css";
export default function NavPagination(prop) {
	const {pageNumber,setPageNumber,totalPages}=prop
	const previousHandle = () => {
		if (pageNumber > 1) {
			setPageNumber((e) => e - 1);
		}
	};
	const nextHandle = () => {
        if (pageNumber <= totalPages - 1) {
			setPageNumber((e) => e + 1);
		}
	};

	return (
		<nav className='pagination'>
			<ul>
				<li className='previous un-selectable' onClick={previousHandle}>
					<button className='fa-solid fa-angle-left'></button>
				</li>
				<li className='page-count'>
					<span>
                          <span className={pageNumber<=0?"":"active"}>{pageNumber}</span>
                        , <span>{pageNumber+1}</span>
                        , <span>{pageNumber+2}</span>...
                    </span>
					of
					<span>{totalPages}</span>
				</li>
				<li className='next un-selectable' onClick={nextHandle}>
					<button className='fa-solid fa-angle-right'></button>
				</li>
			</ul>
		</nav>
	);
}
