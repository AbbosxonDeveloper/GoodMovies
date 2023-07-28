import './hero.scss'

export function Hero() {
    return (
        <section>
            <div className="hero">
                <h1>Тор: любовь и гром</h1>
                <p className='hero--text'>Долгожданная премьера фильма с 21 мая во всех кинотеатрах</p>
                <a className='hero--click' href="https://youtube.com">
                    <button className='hero--btn'>
                        Смотреть трейлер
                    </button>
                </a>
            </div>
        </section>
    )
}