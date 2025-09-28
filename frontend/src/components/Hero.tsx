import img from '../assets/wallpaper.jpg';

const Hero = () => {
  return (
    <div className="flex justify-evenly items-center pt-25">
      <div className="space-y-10">
        <h1 className="text-[#fffffe] text-5xl font-bold">
          Welcome to My Store
        </h1>
        <p className="text-[#94a1b2] max-w-xl text-2xl font-bold">
          Shop the latest products with amazing deals just for you
        </p>
        <button className="bg-[#7f5af0] px-10 py-5 text-[#fffffe] font-bold hover:bg-blue-700">
          Shop Now!
        </button>
      </div>
      <img src={img} className="w-auto h-full object-cover " />
    </div>
  );
};
export default Hero;
