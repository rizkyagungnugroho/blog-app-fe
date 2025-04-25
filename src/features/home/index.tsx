import Bloglist from "./components/Bloglist";
import Jumbotron from "./components/Jumbotron"

const Homepage = () => {
  return (
    <main className="container mx-auto px-4">
        <Jumbotron/>
        <Bloglist/>
    </main>
  );
}

export default Homepage