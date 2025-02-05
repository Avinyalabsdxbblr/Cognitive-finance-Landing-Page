export default function sitemap() {
  const baseUrl = "https://cognitivefinance.xyz"; // Change to your domain

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date().toISOString(),
    },
    {
      url: `${baseUrl}/chat`,
      lastModified: new Date().toISOString(),
    },
  ];
}
