import img from '../assets/wallpaper.jpg';

const CartScreen = () => {
  return (
    <div className="pt-15">
      <div className=" grid grid-cols-3 gap-10 place-items-center">
        {/* Card 1 */}
        <div className="bg-[#16161a] w-[450px] h-52 flex flex-col p-5 gap-2">
          <div className="flex">
            <img src={img} className="w-[150px] h-[100px]" />
            <p className="text-[#94a1b2] pl-5">
              Hue is basically a fancy name for color... Sort of. Hue refers to
              the parent color, or rather the fully saturated color
            </p>
          </div>
          <h1 className="text-[#fffffe] text-lg font-semibold">$99.99</h1>
          <button className="bg-[#7f5af0] w-30 px-2 py-1 text-[#fffffe] font-bold hover:bg-blue-700">
            Add to Cart
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-[#16161a] w-[450px] h-52 flex flex-col p-5 gap-2">
          <div className="flex">
            <img src={img} className="w-[150px] h-[100px]" />
            <p className="text-[#94a1b2] pl-5">
              Hue is basically a fancy name for color... Sort of. Hue refers to
              the parent color, or rather the fully saturated color
            </p>
          </div>
          <h1 className="text-[#fffffe] text-lg font-semibold">$89.99</h1>
          <button className="bg-[#7f5af0] w-30 px-2 py-1 text-[#fffffe] font-bold hover:bg-blue-700">
            Add to Cart
          </button>
        </div>

        {/* Card 3 */}
        <div className="bg-[#16161a] w-[450px] h-52 flex flex-col p-5 gap-2">
          <div className="flex">
            <img src={img} className="w-[150px] h-[100px]" />
            <p className="text-[#94a1b2] pl-5">
              Hue is basically a fancy name for color... Sort of. Hue refers to
              the parent color, or rather the fully saturated color
            </p>
          </div>
          <h1 className="text-[#fffffe] text-lg font-semibold">$79.99</h1>
          <button className="bg-[#7f5af0] w-30 px-2 py-1 text-[#fffffe] font-bold hover:bg-blue-700">
            Add to Cart
          </button>
        </div>

        {/* Card 4 */}
        <div className="bg-[#16161a] w-[450px] h-52 flex flex-col p-5 gap-2">
          <div className="flex">
            <img src={img} className="w-[150px] h-[100px]" />
            <p className="text-[#94a1b2] pl-5">
              Hue is basically a fancy name for color... Sort of. Hue refers to
              the parent color, or rather the fully saturated color
            </p>
          </div>
          <h1 className="text-[#fffffe] text-lg font-semibold">69.99</h1>
          <button className="bg-[#7f5af0] w-30 px-2 py-1 text-[#fffffe] font-bold hover:bg-blue-700">
            Add to Cart
          </button>
        </div>

        {/* Card 5 */}
        <div className="bg-[#16161a] w-[450px] h-52 flex flex-col p-5 gap-2">
          <div className="flex">
            <img src={img} className="w-[150px] h-[100px]" />
            <p className="text-[#94a1b2] pl-5">
              Hue is basically a fancy name for color... Sort of. Hue refers to
              the parent color, or rather the fully saturated color
            </p>
          </div>
          <h1 className="text-[#fffffe] text-lg font-semibold">$59.99</h1>
          <button className="bg-[#7f5af0] w-30 px-2 py-1 text-[#fffffe] font-bold hover:bg-blue-700">
            Add to Cart
          </button>
        </div>

        {/* Card 6 */}
        <div className="bg-[#16161a] w-[450px] h-52 flex flex-col p-5 gap-2">
          <div className="flex">
            <img src={img} className="w-[150px] h-[100px]" />
            <p className="text-[#94a1b2] pl-5">
              Hue is basically a fancy name for color... Sort of. Hue refers to
              the parent color, or rather the fully saturated color
            </p>
          </div>
          <h1 className="text-[#fffffe] text-lg font-semibold">$49.99</h1>
          <button className="bg-[#7f5af0] w-30 px-2 py-1 text-[#fffffe] font-bold hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default CartScreen;
