import './otherfilm.scss'
import harrypotter from '../../assets/harrypotter.jpg'
import fasterthb from '../../assets/fasterthanbullet.jpg'
import morthman from '../../assets/morthman.jpg'
import ancharted from '../../assets/ancharted.jpg'

export function OtherFilm() {
    return (
        <section className='section__otherfilm'>
                <h3 className='otherfilm--heading'>Другие фильмы</h3>
            <div className="otherfilm container">
                <div className="otherfilm--box">
                    <img src={harrypotter} alt="harrypotter movie" />
                    <p className='otherfilm--text'>Гарри Поттер 20 лет спустя: Возвращение в Хогвартс</p>
                </div>
                <div className="otherfilm--box">
                    <img src={fasterthb} alt="fasterthanbullet movie" />
                    <p className='otherfilm--text'>Быстрее пули</p>
                </div>
                <div className="otherfilm--box">
                    <img src={morthman} alt="morthman movie" />
                    <p className='otherfilm--text'>Варяг</p>
                </div>
                <div className="otherfilm--box">
                    <img src={ancharted} alt="ancharted movie" />
                    <p className='otherfilm--text'>Анчартед</p>
                </div>
            </div>
        </section>
    )
}