import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import useProducts from './hooks/useProducts';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import FilterSection from './components/FilterSection';
import SortDropdown from './components/SortDropdown';
import Pagination from './components/Pagination';
import MiniCart from './components/MiniCart';
import LoadingSkeleton from './components/LoadingSkeleton';
import Footer from './components/Footer';
import './styles/App.css';

const ITEMS_PER_PAGE = 8;

function App() {
  const { products, loading, error } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortOption) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'title-asc':
        return a.title.localeCompare(b.title);
      case 'title-desc':
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  const totalPages = Math.ceil(sortedProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (error) return <div className="error">Error loading products: {error}</div>;

  return (
    <CartProvider>
      <div className="app">
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        
        <main className="main-content">
          <div className="controls">
            <FilterSection 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
            <SortDropdown 
              sortOption={sortOption}
              onSortChange={setSortOption}
            />
          </div>

          <div className="product-grid">
            {loading ? (
              <LoadingSkeleton count={ITEMS_PER_PAGE} />
            ) : (
              paginatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            )}
          </div>

          {!loading && totalPages > 1 && (
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          )}
        </main>
        
        <Footer/>

        <MiniCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
}

export default App;