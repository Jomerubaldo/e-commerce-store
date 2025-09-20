import ProductCard from '../components/ProductCard';

const ProductsScreen = () => {
  return (
    <div className="bg-[#242629] w-full h-screen pt-15">
      <h1 className="text-center text-5xl text-[#fffffe] font-bold">
        Products
      </h1>
      <ProductCard />
    </div>
  );
};
export default ProductsScreen;
