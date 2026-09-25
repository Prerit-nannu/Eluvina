import Link from 'next/link';

export default function BlogCard({ post }) {
  const { slug, title, excerpt, category, date, readTime, icon } = post;

  return (
    <article className="blog-card">
      <div className="blog-banner">
        <span>{icon || '📰'}</span>
      </div>
      <div className="blog-body">
        <div className="blog-meta">
          <span className="blog-category">{category}</span>
          <span>• {date}</span>
          <span>• {readTime} read</span>
        </div>
        <h3>{title}</h3>
        <p>{excerpt}</p>
        <Link href={`/blog/${slug}`} className="read-more-link">
          Read Full Article →
        </Link>
      </div>
    </article>
  );
}
