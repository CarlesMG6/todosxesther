import { AiOutlineMail, AiOutlineInstagram} from "react-icons/ai";
// Navegación principal del sitio
export const NAVIGATION_LINKS = [
  { nameKey: 'Navegacion.esther', href: '/esther' },
  { nameKey: 'Navegacion.donaciones', href: '/donaciones' },
  { nameKey: 'Navegacion.agenda', href: '/agenda' },
  { nameKey: 'Navegacion.contacto', href: '/contacto' },  
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
