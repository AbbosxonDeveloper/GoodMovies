import './otherfilm.scss'

export function OtherFilm() {
    return (
        <section className='section__otherfilm'>
                <h3 className='otherfilm--heading'>Другие фильмы</h3>
            <div className="otherfilm container">
                <div className="otherfilm--box">
                    <img src="./src/assets/harrypotter.png" alt="harrypotter movie" />
                    <p className='otherfilm--text'>Гарри Поттер 20 лет спустя: Возвращение в Хогвартс</p>
                </div>
                <div className="otherfilm--box">
                    <img src="./src/assets/fasterthanbullet.png" alt="fasterthanbullet movie" />
                    <p className='otherfilm--text'>Быстрее пули</p>
                </div>
                <div className="otherfilm--box">
                    <img src="./src/assets/morthman.png" alt="morthman movie" />
                    <p className='otherfilm--text'>Варяг</p>
                </div>
                <div className="otherfilm--box">
                    <img src="./src/assets/ancharted.png" alt="ancharted movie" />
                    <p className='otherfilm--text'>Анчартед</p>
                </div>
            </div>
        </section>
    )
}