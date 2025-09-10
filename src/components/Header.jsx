import Logo from "../assets/dmax_logo.png";
function Header() {
  return (
    <header className="bg-white-800 text-black font-semibold font-sans px-8">
      <nav className="flex items-center justify-arounds px-12">
        {/* logo */}
        <div>
          <button>
            <img src={Logo} alt="Logo" className="w-40  h-auto min-w-24 mr-3" />
          </button>
        </div>
        <div className="flex flex-1 ml-4 justify-between items-center text-lg">
          <div>
            <ul className="flex gap-5 ml-8">
              <li>
                <button className="px-6 py-4 w-full h-full hover:bg-gray-100">
                  Product<i class="fa-solid fa-caret-down"></i>
                </button>
              </li>
              <li>
                <button className="px-6 py-4 w-full h-full hover:bg-gray-100">
                  Solutions
                </button>
              </li>
              <li>
                <button className="px-6 py-4 w-full h-full hover:bg-gray-100">
                  Learn <i class="fa-solid fa-caret-down"></i>
                </button>
              </li>
              <li>
                <button className="px-6 py-4 w-full h-full hover:bg-gray-100">
                  Support <i class="fa-solid fa-caret-down"></i>
                </button>
              </li>
            </ul>
          </div>
          <div className="flex gap-4">
            <button className="rounded-full border px-6 py-2 hover:bg-gray-300 transition-all">Contact Us</button>
            <button>
              <i className="fa-solid fa-user"></i>
            </button>
            <button>
              <i className="fa-solid fa-globe"></i>
            </button>
            <button>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Header;
