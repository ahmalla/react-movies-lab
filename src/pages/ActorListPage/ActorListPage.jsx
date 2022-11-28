import ActorCard from "../../components/ActorCard/ActorCard";

function ActorListPage({ movies }) {
    const actorList = movies.reduce((actors, m) => {
        m.cast.forEach((a) => {
            if (!actors.includes(a)) actors.push(a);
    })
    return actors;
}, [])

return (
    <div>
        {actorList.map((actor) => {
            return <ActorCard key={actor} actor={actor} />
        })}
    </div>
    )
}

export default ActorListPage;