import { FaLinkedinIn, FaGithub, FaHome } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { Link } from 'react-router-dom';

const navigation = [
  {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/in/maxime-rigot-53259169/',
    icon: () => (
      <FaLinkedinIn className="w-5/12 -mt-3" style={{color: "gray"}}/>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/volpito',
    icon: () => (
      <FaGithub className="w-5/12 -mt-3" style={{color: "gray"}}/>
    ),
  },
  {
    name: 'Mail',
    href: '#',
    icon: () => (
      <Link to="/contact"><MdMail className="w-5/12 -mt-3" style={{color: "gray"}}/></Link>
    ),
  },
  {
    name: 'Home',
    href: '#',
    icon: () => (
      <Link to="/"><FaHome className="w-5/12 -mt-3" style={{color: "gray"}}/></Link>
    ),
  },
]

export default function Footer() {
  return (
    <footer className="">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">&copy; 2020 Portfolio, MPJRigot -- Junior Full-Stack Developer</p>
        </div>
      </div>
    </footer>
  )
}
