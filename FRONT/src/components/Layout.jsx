import { Outlet, useLocation } from 'react-router-dom'
const Layout = () => {
	const location = useLocation()
	// console.log(location);
	return (
		<div className='md:flex md:min-h-screen'>
			<aside className='md:w-1/4 bg-blue-900 px-5 py-10'>
				<h2 className=' font-black text-center text-white text-4xl'>
					CRM - Clientes
				</h2>
				<nav className='mt-10'>
					<a
						className={`${
							location.pathname === '/' ? 'text-blue-300' : 'text-white'
						} text-2xl block hover:text-blue-300 mt-2`}
						href='/'>
						Clientes
					</a>
					<a
						className={`${
							location.pathname === '/clientes/nuevo'
								? 'text-blue-300'
								: 'text-white'
						} text-2xl block hover:text-blue-300 mt-2`}
						href='/clientes/nuevo'>
						NuevoCliente
					</a>
				</nav>
			</aside>

			<main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
				<Outlet />
			</main>
		</div>
	)
}

export default Layout
