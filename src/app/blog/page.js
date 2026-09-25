import BlogCard from '@/components/BlogCard';
import { blogPosts } from '@/data/blogData';

export const metadata = {
  title: 'Skincare & Aesthetic Blog | Expert Dermatologist Guides',
  description: 'Read the latest aesthetic skincare tips, treatment comparisons, anti-aging advice, and dermatologist guides.',
};

export default function BlogPage() {
  return (
    <>
      <div className="page-header">
        <span className="section-tag">Dermatology Insights & Tips</span>
        <h1>Skincare & Aesthetic <span className="highlight">Blog</span></h1>
        <p style={{ maxWidth: '650px', margin: '0 auto' }}>
          Expert articles, treatment comparisons, and doctor-approved guidance to help you make informed decisions about your skin.
        </p>
      </div>

      <section className="page-section">
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
