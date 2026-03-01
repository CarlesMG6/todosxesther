export default function robots() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://todosxesther.com';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
