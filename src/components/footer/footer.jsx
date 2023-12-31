import './footer.scss'
import logo from '../../assets/logo.png'

export function Footer() {
    return (
        <section className='fsec'>
            <footer className="footer container">
                <a href="/">
                    <img src={logo} width={70} height={36} alt="footer logo" />
                </a>
                <form className="footer--form">

                    <div className="footer--box">
                        <p className='footer--text'>Ваше имя</p>
                        <input type="text" className='footer--input' />
                    </div>
                    <div className="footer--box">
                        <p className='footer--text'>Номер телефона</p>
                        <input type="text" className='footer--input' />
                    </div>
                    <button className="footer--submit" type="submit">Отправить</button>
                </form>
            </footer>
        </section>
    )
}