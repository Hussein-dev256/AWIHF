import Link from 'next/link';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.acholiwomeninhealth.org';

type BreadcrumbItem = {
  name: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const allItems = [{ name: 'Home', href: '/' }, ...items];
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.href === '/' ? '' : item.href}`,
    })),
  };

  return (
    <div className="w-full bg-white border-b border-gray-100 px-4 md:px-8 py-3">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav className="max-w-content mx-auto text-xs md:text-sm text-gray-500" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={`${item.href}-${item.name}`} className="flex items-center gap-2">
                {isLast ? (
                  <span className="font-medium text-brand-brown" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-brand-orange transition-colors">
                    {item.name}
                  </Link>
                )}
                {!isLast && <span className="text-gray-300" aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </div>
  );
}
