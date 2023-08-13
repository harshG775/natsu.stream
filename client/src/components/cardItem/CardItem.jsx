export default function CardItem(prop) {
    const { cardData } = prop;
    return (
        <div className="item">
            <div className="item-inner">
                <a href={`/overview/${cardData.id}`}>
                    <img
                        src={`https://image.tmdb.org/t/p/w342${cardData.backdrop_path}`}
                        alt=''
                    />
                </a>
                <div className='meta'>
                    <div>
                        <span>{"date"}</span>
                        <span>{"season/movie"}</span>
                        <span>{"episodes"}</span>
                    </div>
                    <a href={`/overview/${cardData.id}`}>{cardData.name}</a>
                </div>
            </div>
        </div>
    );
}