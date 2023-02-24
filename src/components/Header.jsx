function Header() {
  return (
    <nav className="flex items-center bg-gray-800 p-3 flex-warp">
        <a href="#" className="p-2 mr-4 inline-flex items-center">
            <span className="text-white text-xl font-bold tracking-wide">Dicionário</span>
        </a>
        <button className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto"><i>menu</i></button>
        <div className="lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
            <div className="lg:inline-flex lg:flex-row lg:ml-auto flex-col">
                <a href="#" className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white
                hover:bg-gray-900">
                    <span> Inicio</span>
                </a>
                <a href="#" className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white
                hover:bg-gray-900">
                    <span>  Login</span>
                </a> 
                <a href="#" className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white
                hover:bg-gray-900">
                    <span> Registrar</span>
                </a>
                <a href="#" className="lg:inline-flex lg:w-auto px-3 py-2 rounded text-gray-400 hover:text-white
                hover:bg-gray-900">
                    <span> Sobre</span>
                </a>
            </div>
        </div>
    </nav>
  )
}

export default Header;