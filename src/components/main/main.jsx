import './main.scss'
import doctorstrange from '../../assets/doctorstrange.jpg'

export function Main() {
    return (
        <section>
            <main className="main container">
                <h2>Лучший фильм 2022 года</h2>

                <div className='main--wrapper'>
                    <div className='main--wrapper--texts'>
                        <h3 className='main--wrapper--heading'>Доктор Стрэндж: В мультивселенной безумия</h3>

                        <p className='main--wrapper--body'>Доктор Стрэндж при помощи Вонга спасает от гигантского осьминога девушку-подростка по имени Америка Чавес, которая при сильном испуге может открывать порталы в параллельные вселенные. Пытаясь уберечь новую знакомую от злой силы, жаждущей заполучить её способность, Доктор вместе с Америкой пускается в путешествие по мультивселенной.</p>

                        <div className='main--wrapper--last'>

                            <a className='main--wrapper--btn hero--click' href="https://youtube.com">
                                <button className='hero--btn'>
                                    Смотреть трейлер
                                </button>
                            </a>

                            <h3 className='main--wrapper--number'>6,5</h3>
                            <p className='main--wrapper--score'>106 662 оценки</p>
                        </div>
                    </div>

                    <img src={doctorstrange} alt="doctorstrange" />
                </div>

            </main>
        </section>
    )
}