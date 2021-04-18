import Image from 'next/image'
import { FaMoon } from '@react-icons/all-files/fa/FaMoon'
function Header() {
  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="mt-6 mb-12 md:mt-12 text-white flex justify-between items-center flex-row">
      <div className="absolute w-full top-0 left-0 block dark:hidden">
        <img className="h-300 w-full object-cover" src="/todo-images/bg-desktop-light.jpg" />
      </div>
      <div className="absolute w-full top-0 left-0 hidden dark:block">
        <img className="h-300 w-full object-cover" src="/todo-images/bg-desktop-dark.jpg" />
      </div>
      <h1 className="text-3xl font-bold tracking-widest relative">TODO</h1>
      <div onClick={toggleDarkMode} className="relative mb-2 cursor-pointer hover:text-yellow-200">
        <FaMoon style={{ width: '24px', height: '24px' }} />
      </div>
    </div>
  )
}

export default Header
