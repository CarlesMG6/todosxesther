import { AiOutlineMail, AiOutlineInstagram, AiOutlinePhone} from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
// Navegación principal del sitio
export const NAVIGATION_LINKS = [
  { nameKey: 'Navigation.esther', href: '/esther' },
  { nameKey: 'Navigation.donations', href: '/donaciones' },
  { nameKey: 'Navigation.agenda', href: '/agenda' },
  { nameKey: 'Navigation.contact', href: '/contacto' },  
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
  },

  phone: {
    name: "Teléfono",
    url: "tel:+34629644588",
    handle: "+34 629 644 588",
  },

  whatsapp: {
    name: "WhatsApp",
    url: "https://wa.me/34629644588",
    handle: "+34 629 644 588",
  }
};

// Array de redes sociales con iconos (para usar en componentes)
export const COMPANY_SOCIALS = [
  { name: SOCIAL_CONFIG.instagram.name, url: SOCIAL_CONFIG.instagram.url, icon: <AiOutlineInstagram /> },
  { name: SOCIAL_CONFIG.email.name, url: SOCIAL_CONFIG.email.url, icon: <AiOutlineMail /> },
  { name: SOCIAL_CONFIG.phone.name, url: SOCIAL_CONFIG.phone.url, icon: <AiOutlinePhone /> },
  { name: SOCIAL_CONFIG.whatsapp.name, url: SOCIAL_CONFIG.whatsapp.url, icon: <FaWhatsapp /> }
];
