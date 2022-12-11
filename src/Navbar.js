import './navbar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';
export default function navbar(){
    return(
    <div style={{paddingBottom:"70px"}}>
    <nav className="nav" >
        <a href="/" className="site-title">Campaign</a>
        <ul>
            <button className="d-flex btn "><a href="/Favorites"><FavoriteIcon/>Favoriler</a></button>
            <button className="d-flex btn "><a href="/Login"><PersonIcon/>Giriş Yap</a></button>
        </ul>
    </nav>
    </div>
    );
}