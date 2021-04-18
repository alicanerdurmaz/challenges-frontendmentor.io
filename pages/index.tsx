import Link from 'next/link'
import projects from '../data/projects.json'

export default function Home() {
  return (
    <div className="min-h-screen bg-50 pb-14">
      <h1 className="text-center mt-8 text-4xl font-bold">Frontend Mentor Challenges</h1>
      <ul className="flex justify-center items-center flex-wrap">
        {projects.map(project => {
          return (
            <Link href={project.liveAppLink}>
              <li className="cursor-pointer transition-shadow ease-material duration-300 flex justify-center items-center flex-wrap flex-col m-8 shadow-material rounded-xl overflow-hidden hover:shadow-material-lg">
                <img src={project.preview} className="w-350 h-200 object-cover" alt="app screenshot" />
                <a className="block p-2">{project.name}</a>
              </li>
            </Link>
          )
        })}
      </ul>

      <footer className="fixed w-full p-3 bg-gray-900 text-center text-gray-50 bottom-0">
        Created with ❤️ by{' '}
        <a className="underline" target="_blank" href="https://twitter.com/alicanerdurmazz">
          Alican Erdurmaz
        </a>{' '}
        | Code on{' '}
        <a className="underline" target="_blank" href="https://github.com/alicanerdurmaz/challenges-frontendmentor.io">
          GitHub
        </a>
      </footer>
    </div>
  )
}
