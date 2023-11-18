import "./overview.css"
import { useParams } from "react-router-dom";
import {useQuery} from "@tanstack/react-query"
import axios from "axios"
import {Icon} from "@iconify/react"


export default function Overview() {
    const {media_type,id} = useParams()


    const { isPending, error, data, /*isFetching*/ } = useQuery({
		queryKey: ["overview"],
		queryFn: () =>axios.get(`https://api.themoviedb.org/3/${media_type}/${id}?api_key=c04c4d588ea04e1542849e5b03feadc9`)
				.then((res) => res.data),
	});
	if (isPending) return "Loading..."
	
	if (error) return "An error has occurred: " + error.message
    return (
        <>
        <section className="overview" data={`id-${id}`}>
            <div className="backdrop" style={{backgroundImage:`url('https://image.tmdb.org/t/p/w1280/${data?.backdrop_path}')`}}>
                <div className="backdrop-inner maxContainer">
                    <img className="poster" src={`https://image.tmdb.org/t/p/w780/${data?.poster_path}`} alt="" />
                    <div className="action-buttons">
                        <span><Icon icon="zondicons:play-outline"/> Watch</span>
                        <span><Icon icon="material-symbols:add"/> Add</span>
                        <span><Icon icon="mdi:heart-outline"/> </span>
                    </div>
                </div>
            </div>
        </section>
    </>
	)
}