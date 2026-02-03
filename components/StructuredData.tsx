'use client';

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Dhiren Kirpalani",
    "url": "https://dhirenkirpalani.com",
    "image": "https://dhirenkirpalani.com/profile.jpg",
    "sameAs": [
      "https://www.linkedin.com/in/dhirenkirpalani",
      "https://github.com/dhirenkirpalani",
      "https://www.tiktok.com/@your.product.guy"
    ],
    "jobTitle": "Product Manager",
    "worksFor": {
      "@type": "Organization",
      "name": "Fintech Company"
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "University"
    },
    "knowsAbout": [
      "Product Management",
      "Fintech",
      "Payment Systems",
      "Product Strategy",
      "User Experience Design",
      "Cross-functional Leadership"
    ],
    "description": "Product Manager specializing in fintech and payment systems. Building scalable products with cross-functional teams.",
    "email": "dhirenkirpalani2308@gmail.com"
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Dhiren Kirpalani - Product Management Services",
    "description": "Product management consulting and advisory services specializing in fintech and payment systems",
    "url": "https://dhirenkirpalani.com",
    "priceRange": "$$",
    "areaServed": "Worldwide",
    "serviceType": [
      "Product Management",
      "Product Strategy",
      "Fintech Consulting",
      "Payment Systems Design"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Dhiren Kirpalani Portfolio",
    "url": "https://dhirenkirpalani.com",
    "description": "Portfolio website of Dhiren Kirpalani, Product Manager specializing in fintech and payments",
    "author": {
      "@type": "Person",
      "name": "Dhiren Kirpalani"
    },
    "inLanguage": "en-US"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://dhirenkirpalani.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://dhirenkirpalani.com#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Experience",
        "item": "https://dhirenkirpalani.com#experience"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Skills",
        "item": "https://dhirenkirpalani.com#skills"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Content",
        "item": "https://dhirenkirpalani.com#content"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Contact",
        "item": "https://dhirenkirpalani.com#contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
