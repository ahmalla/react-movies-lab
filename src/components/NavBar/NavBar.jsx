import { Link } from "react-router-dom";

function NavBar({user}) {
    return (
        <main>
            <Link to="/">
                <button>Movies</button>
            </Link>
            &nbsp; | &nbsp;
            <Link to="/actors">
                <button>Actors</button>
            </Link>
            <p>Greetings, {user}</p>
        </main>
    )
}

export default NavBar;