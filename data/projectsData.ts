interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'No Projects yet!',
    description: `There are no project here yet, you have to wait
    for me do do some actual work instead of tinker with nvim and tmux configs`,
    imgSrc: '/static/images/not_found.png',
    href: 'https://www.google.com',
  },
]

export default projectsData
