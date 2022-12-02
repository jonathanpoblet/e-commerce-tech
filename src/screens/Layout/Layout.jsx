import { Footer } from '../../components/LayoutComponents/FooterComponent/Footer';
import { NavBar } from '../../components/LayoutComponents/navBar/NavBar';
import './styles.css'

const Layout = ({children}) => {
    console.log(children.props.children)
    return (
        <>
        <NavBar />
            {children}
        <Footer />    
        </>
    );
}

export default Layout;
