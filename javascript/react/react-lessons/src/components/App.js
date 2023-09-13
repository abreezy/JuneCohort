import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Card from './Card';

/*

nav component
footer component
card component

shortcut key = rfce
*/

function App() {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <main>
                <Card
                img = "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
                title = "3 bedroom home"
                description = "pool + wifi + amenities"
                price = "$75 p/n" 
                alt = "image of a home"
                />
                <Card
                img = "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
                title = "Abeer"
                description = "Software engineer"
                alt = "image of a home"
                />
                <Card />
            </main>
            <footer>
                < Footer />
            </footer>
        </div>
    )
}

export default App;
