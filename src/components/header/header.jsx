import './header.scss'
import logo from '../../assets/logo.png'

export function Header() {
    return (
        <section>
            <header className='header'>

                <a href="/">
                    <img src={logo} alt="logo" />
                </a>

                <ul className='header--list'>
                    <li>
                        <a href="/" className='header--list--text'>
                            КИНОПРЕМЬЕРЫ
                        </a>
                    </li>
                    <li>
                        <a href="/" className='header--list--text'>
                            ВСЕ ФИЛЬМЫ
                        </a>
                    </li>
                    <li>
                        <a href="/" className='header--list--text'>
                            СЕРИАЛЫ
                        </a>
                    </li>
                    <li>
                        <a href="/" className='header--list--text'>
                            О СЕРВИСЕ
                        </a>
                    </li>
                    <li>
                        <a href="/" className='header--list--text'>
                            ПОДДЕРЖКА
                        </a>
                    </li>
                </ul>
            </header>
        </section>
    )
}
