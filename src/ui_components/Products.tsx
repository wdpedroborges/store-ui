import { Link } from "react-router-dom";
import Hero from "./Hero";
import { useSelector } from 'react-redux';

export default function Products() {
    const products = useSelector((state: any) => state.products)
    return (
        <>
            <Hero/>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                <div className="mb-6 flex items-end justify-between gap-4">
                <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">Check our products</h2>
                </div>

                <div className="grid gap-x-4 gap-y-8 sm:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
                    {/* <div>
                        <a href="#" className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                        <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600" loading="lazy" alt="Photo by Rachit Tank" className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                        <span className="absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white">sale</span>
                        </a>

                        <div>
                        <a href="#" className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">Timely Watch</a>

                        <div className="flex items-end gap-2">
                            <span className="font-bold text-gray-800 lg:text-lg">$15.00</span>
                            <span className="mb-0.5 text-red-500 line-through">$30.00</span>
                        </div>
                        </div>
                    </div> */}

                    {
                        products.map((product: any, index: any) => {
                            return (
                                <div key={index}>
                                    <Link to={`/product/${product.id}`} className="group relative mb-2 block h-80 overflow-hidden rounded-lg bg-gray-100 lg:mb-3">
                                        <img src={product.image} loading="lazy" alt={product.title} className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    </Link>
            
                                    <div>
                                    <a href="#" className="hover:gray-800 mb-1 text-gray-500 transition duration-100 lg:text-lg">{product.title}</a>
            
                                    <div className="flex items-end gap-2">
                                        <span className="font-bold text-gray-800 lg:text-lg">${product.price}</span>
                                    </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
            </div>
        </>
    )
}