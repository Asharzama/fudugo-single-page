import AboutUs from "./components/AboutUs";
import Events from "./components/Events";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InstagramFeed from "./components/InstagramFeed";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutUs />
      <Events />
      <InstagramFeed />
      <Footer />
    </div>
  );
}

export default App;
