import { indexJsonLd } from '@/app/lib/breadcrumb'

export default function Home() {
  return (
    <main>
      Main Page
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(indexJsonLd) }}
      />
    </main>
  );
}

<meta name="google-site-verification" content="6NTQUvsjZD90dyrslW3fzBjMVE1iP-rqWDMUamAQPqc" />
