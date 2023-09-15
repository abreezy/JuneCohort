import logo from './logo.svg';
import './App.css';
import Nav from './Nav';
import Footer from './Footer';
import Card from './Card';

function App() {
  return (
    <div>
            <header>
                <Nav />
            </header>
            <main className='card-grid'>
                <Card
                img = "https://upload.wikimedia.org/wikipedia/en/thumb/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg/220px-Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg"
                title = "Harry Potter and the Philosopher’s Stone"
                author = "J.K. Rowling"
                release = "1997"
                price = "£10" 
                alt = "Harry Potter and the Philosopher’s Stone"
                />
                <Card
                img = "https://upload.wikimedia.org/wikipedia/en/5/5c/Harry_Potter_and_the_Chamber_of_Secrets.jpg"
                title = "Harry Potter and the Chamber of Secrets"
                author = "J.K. Rowling"
                release = "1998"
                price = "£10" 
                alt = "Harry Potter and the Chamber of Secrets"
                />
                <Card
                img = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/Harry_Potter_and_the_Prisoner_of_Azkaban.jpg/220px-Harry_Potter_and_the_Prisoner_of_Azkaban.jpg"
                title = "Harry Potter and the Prisoner of Azkaban"
                author = "J.K. Rowling"
                release = "1999"
                price = "£10" 
                alt = "Harry Potter and the Prisoner of Azkaban"
                />
                <Card
                img = "https://upload.wikimedia.org/wikipedia/en/b/b6/Harry_Potter_and_the_Goblet_of_Fire_cover.png"
                title = "Harry Potter and the Goblet of Fire"
                author = "J.K. Rowling"
                release = "2000"
                price = "£10" 
                alt = "Harry Potter and the Goblet of Fire"
                />
                <Card
                img = "https://upload.wikimedia.org/wikipedia/en/thumb/7/70/Harry_Potter_and_the_Order_of_the_Phoenix.jpg/220px-Harry_Potter_and_the_Order_of_the_Phoenix.jpg"
                title = "Harry Potter and the Order of the Phoenix"
                author = "J.K. Rowling"
                release = "2003"
                price = "£10" 
                alt = "Harry Potter and the Order of the Phoenix"
                />
                <Card
                img = "https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/Harry_Potter_and_the_Half-Blood_Prince_cover.png/220px-Harry_Potter_and_the_Half-Blood_Prince_cover.png"
                title = "Harry Potter and the Half-Blood Prince"
                author = "J.K. Rowling"
                release = "2005"
                price = "£10" 
                alt = "Harry Potter and the Half-Blood Prince"
                />
                <Card
                img = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/Harry_Potter_and_the_Deathly_Hallows.jpg/220px-Harry_Potter_and_the_Deathly_Hallows.jpg"
                title = "Harry Potter and the Deathly Hallows"
                author = "J.K. Rowling"
                release = "2007"
                price = "£10" 
                alt = "Harry Potter and the Deathly Hallows"
                />
            </main>
            <footer>
                < Footer />
            </footer>
        </div>
  );
}

export default App;
