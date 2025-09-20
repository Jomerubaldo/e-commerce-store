const Navbar = () => {
  return (
    <div className="text-[#fffffe] flex justify-around items-center gap-10 pt-15 ">
      <h1 className="text-[#fffffe] font-bold text-[20px]">ECOMMERCE</h1>
      <ul className="flex gap-20 font-bold text-[20px]">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#products">Products</a>
        </li>
        <li>
          <a href="#cart">Cart</a>
        </li>
      </ul>
    </div>
  );
};
export default Navbar;
