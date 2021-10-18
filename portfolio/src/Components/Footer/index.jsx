import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';

const navigation = {

  main: [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/contact' },
  ],
  social: [
    {
      name: 'GitHub',
      href: 'https://github.com/volpito',
      icon: () => (
        <FaGithubSquare className="w-1/2 -mt-4"/>
      ),
    },
    {
      name: 'Linkedin',
      href: 'https://www.linkedin.com/in/maxime-rigot-53259169/',
      icon: () => (
        <FaLinkedin className="w-1/2 -mt-4 justify-items-right"/>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-gray-100 max-w-2xl mx-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="px-5 py-2">
              <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-8 w-full flex justify-center space-x-6 ml-2">
          {navigation.social.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-400">&copy; 2021 Portfolio, MPJRigot -- Junior Full-Stack developer</p>
      </div>
    </footer>
  )
}
