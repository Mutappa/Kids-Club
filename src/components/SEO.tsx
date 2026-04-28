import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: object;
}

export default function SEO({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  ogType = 'website',
  jsonLd
}: SEOProps) {
  const siteTitle = 'Kids Club by Nisreen';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = 'Premium preschool and nursery in Mazgaon, Mumbai with over 30 years of teaching experience. Nurturing environment for your child\'s growth.';
  const pageDescription = description || defaultDescription;
  const siteUrl = window.location.origin;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={pageDescription} />
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || pageDescription} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:url" content={window.location.href} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || fullTitle} />
      <meta name="twitter:description" content={ogDescription || pageDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
}
