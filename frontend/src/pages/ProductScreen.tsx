import ProductCard from '../components/ProductCard';

const ProductScreen = () => {
  return (
    <div className="bg-[#16161a] w-full h-screen pt-10">
      <h1 className="text-center text-5xl text-[#fffffe] font-bold pb-10">Product</h1>
      <ProductCard />
    </div>
  );
};
export default ProductScreen;
