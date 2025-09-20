import heroImg from '../assets/wallpaper.jpg';

const ProductCard = () => {
  return (
    <div className="pt-15">
      <div className=" grid grid-cols-3 space-y-10 place-items-center">
        {/* Card 1 */}
        <div className="bg-[#16161a] w-[450px] h-52">
          <div className="flex p-5">
            <img src={heroImg} className="w-[150px] h-[100px]" />
            <h1>Product</h1>
          </div>
          <p>wewqeqweqweqwewqe</p>
        </div>

        {/* Card 2 */}
        <div className="bg-[#16161a] w-[450px] h-52">
          <div className="flex p-5">
            <img src={heroImg} className="w-[150px] h-[100px]" />
            <h1>Product</h1>
          </div>
          <p>wewqeqweqweqwewqe</p>
        </div>

        {/* Card 3 */}
        <div className="bg-[#16161a] w-[450px] h-52">
          <div className="flex p-5">
            <img src={heroImg} className="w-[150px] h-[100px]" />
            <h1>Product</h1>
          </div>
          <p>wewqeqweqweqwewqe</p>
        </div>

        {/* Card 4 */}
        <div className="bg-[#16161a] w-[450px] h-52">
          <div className="flex p-5">
            <img src={heroImg} className="w-[150px] h-[100px]" />
            <h1>Product</h1>
          </div>
          <p>wewqeqweqweqwewqe</p>
        </div>

        {/* Card 5 */}
        <div className="bg-[#16161a] w-[450px] h-52">
          <div className="flex p-5">
            <img src={heroImg} className="w-[150px] h-[100px]" />
            <h1>Product</h1>
          </div>
          <p>wewqeqweqweqwewqe</p>
        </div>

        {/* Card 6 */}
        <div className="bg-[#16161a] w-[450px] h-52">
          <div className="flex p-5">
            <img src={heroImg} className="w-[150px] h-[100px]" />
            <h1>Product</h1>
          </div>
          <p>wewqeqweqweqwewqe</p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
