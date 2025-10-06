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

const DEFAULT_SITE_DESCRIPTION = 'Commercial cleaning specialists for Brisbane offices, gyms, clinics, hospitality venues and retail spaces.';
const DEFAULT_SHARE_IMAGE_WIDTH = 1200;
const DEFAULT_SHARE_IMAGE_HEIGHT = 630;
const DEFAULT_SOCIAL_PROFILES = ['https://instagram.com/mogclean'];
const DEFAULT_CONTACT_PHONE = '+61 411 820 650';
const BREADCRUMB_LABEL_OVERRIDES: Record<string, string> = {
  faq: 'FAQs',
  'thank-you': 'Thank You',
  offices: 'Office Cleaning',
  fitness: 'Fitness Centres',
  health: 'Medical Facilities',
  education: 'Educational Facilities',
  hospitality: 'Hospitality',
  retail: 'Retail Spaces',
};

const toTitleCase = (value: string) =>
  value
    .split('-')
    .filter(Boolean)
    .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
    .join(' ');

const createBreadcrumbsJsonLd = (siteUrl: string, pathname: string) => {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) {
    return undefined;
  }

  const items = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: siteUrl,
    },
  ];

  let cumulativePath = '';
  segments.forEach((segment, index) => {
    cumulativePath += `/${segment}`;
    const decodedSegment = decodeURIComponent(segment);
    const normalizedKey = decodedSegment.toLowerCase();
    const label =
      BREADCRUMB_LABEL_OVERRIDES[normalizedKey] ?? toTitleCase(decodedSegment);

    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: label,
      item: `${siteUrl}${cumulativePath}`,
    });
  });

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  };
};

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
  const localeHref = DEFAULT_LOCALE.replace('_', '-');
  const jsonLdValue: Record<string, unknown>[] = Array.isArray(jsonLd)
    ? (jsonLd as Record<string, unknown>[])
    : jsonLd
    ? [(jsonLd as Record<string, unknown>)]
    : [];
  const organizationJsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: DEFAULT_SITE_NAME,
    url: siteUrl,
    logo: ensureAbsoluteUrl(siteUrl, DEFAULT_SHARE_IMAGE),
    sameAs: DEFAULT_SOCIAL_PROFILES,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: DEFAULT_CONTACT_PHONE,
        areaServed: 'AU',
        availableLanguage: ['English'],
      },
    ],
  };
  const websiteJsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: DEFAULT_SITE_NAME,
    url: siteUrl,
    description: DEFAULT_SITE_DESCRIPTION,
    inLanguage: localeHref,
    publisher: {
      '@type': 'Organization',
      name: DEFAULT_SITE_NAME,
      url: siteUrl,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteUrl}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };
  const breadcrumbJsonLd = createBreadcrumbsJsonLd(siteUrl, pathname);
  const combinedJsonLd: Record<string, unknown>[] = [
    organizationJsonLd,
    websiteJsonLd,
    ...(breadcrumbJsonLd ? [breadcrumbJsonLd] : []),
    ...jsonLdValue,
  ];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta property="og:locale" content={DEFAULT_LOCALE} />
      <meta name="application-name" content={DEFAULT_SITE_NAME} />
      <meta name="apple-mobile-web-app-title" content={DEFAULT_SITE_NAME} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang={localeHref.toLowerCase()} href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

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
      {ogImage && (
        <>
          <meta property="og:image" content={ogImage} />
          <meta property="og:image:secure_url" content={ogImage} />
          <meta property="og:image:width" content={String(DEFAULT_SHARE_IMAGE_WIDTH)} />
          <meta property="og:image:height" content={String(DEFAULT_SHARE_IMAGE_HEIGHT)} />
        </>
      )}
      {imageAlt && <meta property="og:image:alt" content={imageAlt} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && (
        <>
          <meta name="twitter:image" content={ogImage} />
          <meta name="twitter:image:width" content={String(DEFAULT_SHARE_IMAGE_WIDTH)} />
          <meta name="twitter:image:height" content={String(DEFAULT_SHARE_IMAGE_HEIGHT)} />
        </>
      )}
      {imageAlt && <meta name="twitter:image:alt" content={imageAlt} />}

      {combinedJsonLd.length > 0 && (
        <script type="application/ld+json">{JSON.stringify(combinedJsonLd)}</script>
      )}

      {children}
    </Helmet>
  );
};

export default SEO;
