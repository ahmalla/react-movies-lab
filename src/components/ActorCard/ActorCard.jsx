
function ActorCard({ actor }) {
    return (  
        <div
        style={{
            background: `url(https://picsum.photos/255)`,
            WebkitBackgroundSize: "cover",
            width: "160px",
            height: "160px",
            display: "inline-block",
            margin: "10px"
        }}
        className="card">
            <div>
                <h3>{actor}</h3>
            </div>
        </div>
    );
}

export default ActorCard;