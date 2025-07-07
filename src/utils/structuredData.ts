export const generatePersonStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Deren Tanaphan",
    alternateName: "LevireG",
    description:
      "Software Engineer specializing in blockchain, cybersecurity, and machine learning",
    url: "https://derentanaphan.pages.dev",
    image: "https://derentanaphan.pages.dev/profile-picture.png",
    sameAs: [
      "https://github.com/Lev1reG",
      "https://www.linkedin.com/in/derentanaphan/",
      "https://www.instagram.com/derentanaphan_/",
    ],
    jobTitle: "Software Engineer",
    // worksFor: {
    //   "@type": "Organization",
    //   name: "VhiWEB",
    //   url: "https://vhiweb.com",
    // },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Universitas Gadjah Mada",
    },
    knowsAbout: [
      "Software Engineering",
      "Blockchain Technology",
      "Machine Learning",
      "Cybersecurity",
      "Full Stack Development",
    ],
  };
};

export const generateWebsiteStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Deren Tanaphan Portfolio",
    url: "https://derentanaphan.pages.dev",
    description:
      "Personal portfolio of Deren Tanaphan, a software engineer specializing in blockchain, cybersecurity, and machine learning.",
    author: {
      "@type": "Person",
      name: "Deren Tanaphan",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://derentanaphan.pages.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };
};

export const generateBreadcrumbStructuredData = (
  items: Array<{ name: string; url: string }>
) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
};
