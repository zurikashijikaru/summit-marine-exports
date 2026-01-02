import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url, schema }) => {
    const siteTitle = "Summit Marine Exports | Premium Indian Seafood";
    const defaultDescription = "Review Summit Marine Exports (est. 1998) - 3-Star Export House in Andhra Pradesh. Exporting premium Vannamei & Black Tiger Shrimp to USA, EU, Japan. Best quality seafood processor in India.";
    const startUrl = "https://summitmarineexports.com"; // Placeholder URL
    const defaultImage = "/assets/hero-bg.png"; // Fallback image

    const metaTitle = title ? `${title} | Summit Marine Exports` : siteTitle;
    const metaDescription = description || defaultDescription;
    const metaImage = image ? `${startUrl}${image}` : `${startUrl}${defaultImage}`;
    const metaUrl = url ? `${startUrl}${url}` : startUrl;

    return (
        <Helmet>
            {/* Standard Metrics */}
            <title>{metaTitle}</title>
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={keywords || "Indian shrimp exporter, Vannamei shrimp Andhra Pradesh, Black Tiger shrimp suppliers, buy wholesale seafood India, headless shell on shrimp, best seafood exporter India, USFDA certified Indian shrimp"} />

            {/* Open Graph / Facebook / LinkedIn */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={metaTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:url" content={metaUrl} />
            <meta property="og:site_name" content="Summit Marine Exports" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={metaTitle} />
            <meta name="twitter:description" content={metaDescription} />
            <meta name="twitter:image" content={metaImage} />

            {/* Canonical */}
            <link rel="canonical" href={metaUrl} />

            {/* Structured Data (JSON-LD) for LLMs */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
