import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

type JsonLd = Record<string, unknown> | Record<string, unknown>[];

type SeoType = 'website' | 'article' | 'profile' | 'product' | 'service' | 'faq';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  imageAlt?: string;
  type?: SeoType;
  robots?: string;
  keywords?: string | string[];
  jsonLd?: JsonLd;
  children?: React.ReactNode;
}

const DEFAULT_SITE_URL = 'https://mogcleaning.com.au';
const DEFAULT_SITE_NAME = 'MOG Cleaning';
const DEFAULT_SHARE_IMAGE = '/logo.svg';
const DEFAULT_LOCALE = 'en_AU';

const ensureAbsoluteUrl = (baseUrl: string, pathOrUrl?: string) => {
  if (!pathOrUrl) {
    return undefined;
  }

  if (/^https?:\/\//i.test(pathOrUrl)) {
    return pathOrUrl;
  }

  const normalizedBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const normalizedPath = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${normalizedBase}${normalizedPath}`;
};

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  image,
  imageAlt,
  type = 'website',
  robots = 'index,follow',
  keywords,
  jsonLd,
  children,
}) => {
  const { pathname } = useLocation();
  const siteUrlEnv = import.meta.env.VITE_SITE_URL ?? DEFAULT_SITE_URL;
  const siteUrl = siteUrlEnv.endsWith('/') ? siteUrlEnv.slice(0, -1) : siteUrlEnv;
  const canonicalUrl = canonical ?? `${siteUrl}${pathname}`;
  const ogImage = ensureAbsoluteUrl(siteUrl, image ?? DEFAULT_SHARE_IMAGE);
  const jsonLdValue = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta property="og:locale" content={DEFAULT_LOCALE} />
      <link rel="canonical" href={canonicalUrl} />

      {keywords && (
        <meta
          name="keywords"
          content={Array.isArray(keywords) ? keywords.join(', ') : keywords}
        />
      )}

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={DEFAULT_SITE_NAME} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}

      {jsonLdValue && jsonLdValue.length > 0 && (
        <script type="application/ld+json">{JSON.stringify(jsonLdValue)}</script>
      )}

      {children}
    </Helmet>
  );
};

export default SEO;
