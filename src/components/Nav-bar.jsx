export function NavBar() {
    return (
      <nav className="flex items-center justify-between py-3 px-6 bg-[#F9F8F6] border-b border-[#DAD6D1] lg:px-[120px]">
        <a href="/" className="text-2xl font-semibold">
          hh<span className="text-green-500">.</span>
        </a>
        <div className="hidden md:flex space-x-4">
          <a
            href="/login"
            className="px-9 py-2  rounded-full border border-[#75716B]"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="px-8 py-2 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-colors"
          >
            Sign up
          </a>
        </div>
        <button className="md:hidden">
          <img
            src="C:\Users\user\React-project\reangsak-personal-blog\src\assets\nav-bar\Vector.svg"
            alt="nav-menu"
          />
        </button>
      </nav>
    );
  }