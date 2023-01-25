import logoTitle from '../../assets/images/Main.png'
import { Link } from 'react-router-dom'
import './index.scss';

const Home =() => {


    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1> Hello! <br />
                <img src={logoTitle} alt="developer"/>
                <br />
                I'm Elgius, a Computer Science Student
                </h1>
                <h2>Aspiring: Web devloper / software developer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}


export default Home