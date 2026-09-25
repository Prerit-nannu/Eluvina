import ProductsPageContent from '@/components/ProductsPageContent';

export const metadata = {
  title: 'Products | Eluvina Aesthetic Centre',
  description: 'Shop luxury skincare and haircare products from Eluvina Aesthetic Centre.',
};

export default function ProductsPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      <ProductsPageContent />
    </main>
  );
}
