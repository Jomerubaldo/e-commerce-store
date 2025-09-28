import Footer from './components/Footer';
import CartScreen from './pages/CartScreen';
import HomeScreen from './pages/HomeScreen';
import ProductScreen from './pages/ProductScreen';

function App() {
  return (
    <div className="scroll-smooth">
      <HomeScreen />
      <CartScreen />
      <ProductScreen />
      <Footer />
    </div>
  );
}

export default App;
