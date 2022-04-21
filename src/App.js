import BikeType from './components/BikeType/BikeType';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import OtherBikes from './components/OtherBikes/OtherBikes';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import { GlobalStyles } from './globalStyles'

function App() {
  return (
		<>
      <GlobalStyles />
			<main>
				<Header />
        <Hero />
        <Services />
        <OtherBikes />
        <BikeType />
        <Testimonial />
        <Footer />
			</main>
		</>
	)
}

export default App;
