import { useState } from "react";
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const checkAmountInCart = (products: any) => {
    let amount = 0
    products.forEach((product: any) => {
        amount += product.amount
    })

    return amount
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }));
  

export default function Navbar() {
    const products = useSelector((state: any) => state.products)
    const [activeLink, setActiveLink] = useState('/');
    const [statusMenu, setStatusMenu] = useState('-left-full')

    const handleLinkClick = (link: any) => {
      setActiveLink(link);

      console.log(products)
    }

    const toggleMenu = () => {
        if (statusMenu === '-left-full') {
            setStatusMenu('left-0')
        } else {
            setStatusMenu('-left-full')
        }
    }

    return (
        <>
            <header className="mb-8 border-b">
                <div className="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
                <Link to="/" className="text-black-800 inline-flex items-center gap-2.5 text-2xl font-bold md:text-3xl" aria-label="logo">
                    <img src="logo-store-ui.png" alt="Logo Store UI" width={200}/>

                    
                </Link>
                <nav className="hidden gap-12 lg:flex 2xl:ml-16">
                    <Link
                        to="/"
                        className={`text-lg font-semibold transition duration-100 hover:text-indigo-500 ${
                        activeLink === '/' ? 'text-indigo-700' : 'text-gray-600'
                        }`}
                        onClick={() => handleLinkClick('/')}
                    >
                        Home
                    </Link>
                    <Link
                        to="/about"
                        className={`text-lg font-semibold transition duration-100 hover:text-indigo-500 ${
                        activeLink === '/about' ? 'text-indigo-700' : 'text-gray-600'
                        }`}
                        onClick={() => handleLinkClick('/about')}
                    >
                        About
                    </Link>
                    <Link
                        to="/contact"
                        className={`text-lg font-semibold transition duration-100 hover:text-indigo-500 ${
                        activeLink === '/contact' ? 'text-indigo-700' : 'text-gray-600'
                        }`}
                        onClick={() => handleLinkClick('/contact')}
                    >
                        Contact
                    </Link>
                </nav>
                <div className="flex divide-x border-r sm:border-l">
                    <Link to="/login" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24" onClick={() => handleLinkClick('/login')}>
                        <IconButton aria-label="cart">
                            <AccountCircleIcon />
                        </IconButton>
                    </Link>

                    <Link to="/cart" className="relative flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24" onClick={() => handleLinkClick('/cart')}>
                        <IconButton aria-label="cart">
                            <StyledBadge badgeContent={checkAmountInCart(products)} color="secondary">
                                <ShoppingCartIcon />
                            </StyledBadge>
                        </IconButton>
                    </Link>

                    <button type="button" className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="hidden text-xs font-semibold text-gray-500 sm:block">Menu</span>
                    </button>

                    <div className={`transition-all h-screen w-4/5 bg-white p-10 fixed shadow-2xl top-0 ${statusMenu} z-50 flex flex-col justify-around items-center`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer hover:text-gray-400" onClick={toggleMenu}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>

                        <Link
                            to="/"
                            className={`text-xl font-semibold transition duration-100 hover:text-indigo-500 ${
                            activeLink === '/' ? 'text-indigo-700' : 'text-gray-600'
                            }`}
                            onClick={() => handleLinkClick('/')}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`text-xl font-semibold transition duration-100 hover:text-indigo-500 ${
                            activeLink === '/about' ? 'text-indigo-700' : 'text-gray-600'
                            }`}
                            onClick={() => handleLinkClick('/about')}
                        >
                            About
                        </Link>
                        <Link
                            to="/contact"
                            className={`text-xl font-semibold transition duration-100 hover:text-indigo-500 ${
                            activeLink === '/contact' ? 'text-indigo-700' : 'text-gray-600'
                            }`}
                            onClick={() => handleLinkClick('/contact')}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
                </div>
            </header>
        </>
    )
}