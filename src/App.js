import './Assets/scss/App.scss';
import Choose from './pages/ChooseSection/Choose';
import Experience from './pages/ExperienceSection/Experience';
import Hero from './pages/HeroSection/Hero';
import Material from './pages/MaterialSection/Material';
import Product from './pages/ProductSection/Product';
import Review from './pages/ReviewSection/Review';

function App() {
  return (
    <div className="App">
     <Hero/>
     <Choose/>
     <Product/>
     <Experience/>
     <Material/>
     <Review/>
    </div>
  );
}

export default App;
