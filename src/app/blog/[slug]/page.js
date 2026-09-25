import Link from 'next/link';
import { notFound } from 'next/navigation';
import { blogPosts } from '@/data/blogData';

export async function generateMetadata({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: 'Post Not Found' };
  return {
    title: `${post.title} | Eluvina Aesthetic Centre Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function SingleBlogPost({ params }) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  // JSON-LD Article Schema
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    'headline': post.title,
    'description': post.excerpt,
    'datePublished': post.date,
    'author': {
      '@type': 'Organization',
      'name': 'Eluvina Aesthetic Centre Medical Team',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article className="article-wrapper">
        <div style={{ marginBottom: '20px' }}>
          <Link href="/blog" style={{ color: 'var(--primary-dark)', fontWeight: '600', fontSize: '0.95rem' }}>
            ← Back to All 16 Procedure Guides
          </Link>
        </div>

        <header className="article-header">
          <span className="section-tag">{post.category}</span>
          <h1 style={{ fontSize: '2.5rem', margin: '15px 0' }}>{post.title}</h1>
          <div style={{ color: 'var(--gray)', fontSize: '0.9rem' }}>
            Published on {post.date} • {post.readTime} read time
          </div>
        </header>

        <div
          className="article-content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <div style={{ marginTop: '60px', padding: '40px', background: 'var(--gradient-card)', borderRadius: 'var(--radius-lg)' }}>
          <h3>Interested in This Procedure?</h3>
          <p style={{ margin: '10px 0 20px' }}>Schedule a personal 1-on-1 consultation with our senior dermatologists & trichologists to discuss your expected results and pricing.</p>
          <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
            <a href="https://wa.me/919286577083" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Procedure via WhatsApp 💬
            </a>
            <Link href="/treatments" className="btn-secondary">
              View All Procedures
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
