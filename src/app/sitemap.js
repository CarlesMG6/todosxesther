export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://todosxesther.com';
  const locales = ['ca', 'es', 'en'];
  const routes = ['', '/agenda', '/contacto', '/donaciones', '/esther'];

  const urls = [];

  // Generar URLs para cada combinación de locale y ruta
  locales.forEach(locale => {
    routes.forEach(route => {
      urls.push({
        url: `${siteUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route === '' ? 'weekly' : 'monthly',
        priority: route === '' ? 1.0 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map(l => [l, `${siteUrl}/${l}${route}`])
          ),
        },
      });
    });
  });

  return urls;
}
