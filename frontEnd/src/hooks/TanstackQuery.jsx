// import {useQuery} from "@tanstack/react-query"
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
// import axios from 'axios'
// function Carousel() {
// 	const { isPending, error, data, isFetching } = useQuery({
// 		queryKey: ["repoData"],
// 		queryFn: () =>axios.get("https://api.themoviedb.org/3/search/movie?query=Jack+Reacher&api_key=c04c4d588ea04e1542849e5b03feadc9").then((res) => res.data),
// 	});
	
// 	console.log(data)
// 	if (isPending) return 'Loading...'
	
// 	if (error) return 'An error has occurred: ' + error.message
// 	return (
// 		<>
// 			<div className='max-w-2xl'>Carousel</div>
// 			<div>
// 				hhh
// 				<ReactQueryDevtools initialIsOpen />
// 			</div>
// 		</>
// 	);
// }