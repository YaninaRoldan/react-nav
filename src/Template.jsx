
import { Outlet, Link } from 'react-router-dom'

const Template = () => {
    <>
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/services">Services</Link>
                <Link to="/who-we-are">Who We Are</Link>
                <Link to="/contact-us">Contact Us</Link>
                <Link to="404">404</Link>
            </nav>
        </header>
        <section>
            <Outlet />
        </section>
        <footer>
            &copy:2023
        </footer>
    </>
}
export default Template;