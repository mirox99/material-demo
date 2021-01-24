import CircularProgress from '@material-ui/core/CircularProgress';
import './loader.css'

function Loader() {
    return (
        <div className="loader-container">
            <CircularProgress/>
        </div>
    )
}

export default Loader