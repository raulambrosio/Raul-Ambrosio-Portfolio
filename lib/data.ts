export const profile = {
  name: 'Raúl Ambrósio',
  role: 'Dev / Designer',
  email: 'raulsambrosio@gmail.com',
  phone: '+244 938332530',
  phoneHref: 'tel:+244938332530',
  location: 'Luanda, Angola',
  birth: '23rd December 2006',
  nationality: 'Angolan',
}

export const socials = {
  github: {
    label: 'github.com/raulambrosio',
    handle: '@raulambrosio',
    href: 'https://github.com/raulambrosio',
  },
  instagram: {
    label: 'instagram.com/raul_ambrosiio',
    handle: '@raul_ambrosiio',
    href: 'https://instagram.com/raul_ambrosiio',
  },
  linkedin: {
    label: 'geraldoambrosio',
    handle: 'geraldoambrosio',
    href: 'https://www.linkedin.com/in/geraldoambrosio',
  },
}

export const education = [
  { years: '2012 - 2017', place: 'Complexo Escolar Sagrada Família' },
  { years: '2018 - 2022', place: 'Colégio Santa Isabel da Hungria' },
  { years: '2023 - 2024', place: 'Instituto Politécnico Industrial de Luanda' },
  {
    years: '2025 - Now',
    place: 'Instituto Politécnico Privado de Ciências e Tecnologia',
  },
]

export const technicalSkills = [
  { src: '/imagens/3pilares.svg', alt: 'HTML / CSS / JavaScript' },
  { src: '/imagens/Imagem25.svg', alt: 'C#' },
  { src: '/imagens/pytthon.svg', alt: 'Python' },
  { src: '/imagens/cpp.svg', alt: 'C++' },
]

export const softwareSkills = [
  { src: '/imagens/pp.svg', alt: 'PowerPoint' },
  { src: '/imagens/vs.svg', alt: 'Visual Studio' },
  { src: '/imagens/vscode.svg', alt: 'Visual Studio Code' },
  { src: '/imagens/git.svg', alt: 'Git' },
]

export const experience = [
  {
    year: '2026',
    text: 'Co-founder of Valfred Creative, an online agency specialized in graphic design, paid traffic, and provision of services.',
  },
  {
    year: '2026',
    text: 'Assertion as software developer, solving problems by creating goal-oriented applications.',
  },
  {
    year: '2025',
    text: 'Consulted with clients, creating logos, posts, and presentations based on their requirements.',
  },
  {
    year: '2024',
    text: 'Apps development with C# for school projects, introducing basic concepts.',
  },
  {
    year: '2024',
    text: 'Designed promotional material for RM Suamino and Young Star Lead as a Graphic Designer.',
  },
]

export const activities = [
  {
    year: '2021',
    title: 'Colégio Santa Isabel da Hungria',
    detail: '2nd place in best abstract art category',
  },
  {
    year: '2025',
    title: 'IPOCET Africa Day',
    detail: 'Camera Man',
  },
]

export const hobbies = [
  { src: '/imagens/music.png', label: 'R&B / Jazz / Rap / Indie Rock' },
  { src: '/imagens/basket.png', label: 'Basketball' },
  { src: '/imagens/caneta.png', label: 'Drawing / Digital Art' },
  { src: '/imagens/livro.png', label: 'Poetry' },
]

export const languages = [
  { src: '/imagens/portugal.png', label: 'Portuguese', level: 'Native' },
  { src: '/imagens/eua.png', label: 'English', level: 'Upper Intermediate' },
]

export const sections = [
  { id: 'about', label: 'About me' },
  { id: 'resume', label: 'Resume' },
  { id: 'work', label: 'Work' },
  { id: 'more', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = (typeof sections)[number]['id']
