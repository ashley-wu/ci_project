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