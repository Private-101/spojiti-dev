

export default function WebsiteNavbar() {
    return (
        <>
        <nav className="shadow">
                    <div className="flex justify-between items-center py-6 px-10 container mx-auto">
                        <div>
                            <h1 className="text-2xl font-bold bg-gradient-to-tr from-sp-primary to-orange-300 bg-clip-text text-transparent hover:cursor-pointer">Spojiti</h1>
                        </div>
                        <div>

                            <div className="hover:cursor-pointer sm:hidden">
                                <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-sp-primary to-orange-300"></span>
                                <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-sp-primary to-orange-300"></span>
                                <span className="h-1 rounded-full block w-8 mb-1 bg-gradient-to-tr from-sp-primary to-orange-300"></span>
                            </div>
                            <div className="flex items-center">

                                <ul className="sm:flex space-x-4 hidden items-center">
                                    <li><a href="/" className="text-gray-700 hover:text-sp-primary text-md ">Home</a></li>
                                    <li><a href="/" className="text-gray-700 hover:text-sp-primary text-md ">About</a></li>
                                    <li><a href="/" className="text-gray-700 hover:text-sp-primary text-md ">Services</a></li>
                                    <li><a href="/" className="text-gray-700 hover:text-sp-primary text-md ">Products</a></li>
                                    <li><a href="/" className="text-gray-700 hover:text-sp-primary text-md ">Contact</a></li>
                                </ul>

                                <div className="md:flex items-center hidden space-x-4 ml-8 lg:ml-12">
                                    <h1 className="text-text-gray-600  py-2 hover:cursor-pointer hover:text-sp-primary">LOGIN</h1>
                                    <h1 className="text-text-gray-600  py-2 hover:cursor-pointer px-4 rounded text-white bg-gradient-to-tr from-sp-primary to-orange-300 hover:shadow-lg">SIGNUP</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
        </>
    )
}