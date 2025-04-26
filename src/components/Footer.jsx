export const Footer = () => {
  return (
        <footer className="bg-white shadow-sm  dark:bg-gray-800 border-t-2 border-gray-500">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
              <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2030 <a href="/" target="_blank" className="hover:underline">cineMate</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <a href="https://www.linkedin.com/in/shubh33803/" className="hover:underline me-4 md:me-6" target="_blank" >LinkedIn</a>
                </li>
                <li>
                    <a href="https://x.com/shubh33803" className="hover:underline me-4 md:me-6" target="_blank" >Twitter</a>
                </li>
                <li>
                    <a href="https://github.com/Shubh-33803" className="hover:underline me-4 md:me-6" target="_blank" >Github</a>
                </li>
                <li>
                    <a href="https://www.instagram.com/" className="hover:underline" target="_blank" >Instagram</a>
                </li>
            </ul>
            </div>
        </footer>

  )
}
