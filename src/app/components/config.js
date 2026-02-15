import { AiOutlineMail, AiOutlineInstagram} from "react-icons/ai";
// Navegación principal del sitio
export const NAVIGATION_LINKS = [
  { name: 'Quien es Esther', href: '/esther' },
  { name: 'Como ayudar', href: '/donaciones' },
  { name: 'Agenda', href: '/agenda' },
  { name: 'Contacto', href: '/contacto' },  
];

export const SOCIAL_CONFIG = {
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/todosxesther/",
    handle: "todosxesther",
  },
  
  email: {
    name: "Email",
    url: "mailto:infotodosconesther@gmail.com",
    handle: "infotodosconesther@gmail.com",
  }
};

// Array de redes sociales con iconos (para usar en componentes)
export const COMPANY_SOCIALS = [
  { name: SOCIAL_CONFIG.instagram.name, url: SOCIAL_CONFIG.instagram.url, icon: <AiOutlineInstagram /> },
  { name: SOCIAL_CONFIG.email.name, url: SOCIAL_CONFIG.email.url, icon: <AiOutlineMail /> }
];
