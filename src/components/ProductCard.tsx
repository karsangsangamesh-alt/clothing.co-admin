import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
// Change this import
import type { Product } from '@/integrations/supabase/types';

// Instead of this
// import type { Product } from '@/services/productService';
interface ProductCardProps {
  product: Product;
  isWishlisted?: boolean;
  onWishlistToggle?: (productId: string) => void;
  onAddToCart?: (productId: string) => void;
}

export const ProductCard = ({
  product,
  isWishlisted = false,
  onWishlistToggle,
  onAddToCart,
}: ProductCardProps) => {
  const discount = product.compare_at_price && product.compare_at_price > product.price
    ? Math.round(((product.compare_at_price - product.price) / product.compare_at_price) * 100)
    : undefined;

  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-gray-200">
      {/* Product Image */}
      <div className="aspect-[3/4] bg-gray-50 relative overflow-hidden">
        {product.image_url ? (
          <img
            src={product.image_url}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Image</span>
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {discount && (
            <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded">
              {discount}% OFF
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => onWishlistToggle?.(product.id)}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-md hover:bg-white hover:scale-110 transition-all duration-300"
          aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              isWishlisted ? "text-red-500 fill-current" : "text-gray-400 group-hover:text-gray-600"
            }`}
          />
        </button>

        {/* Quick View Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Link to={`/product/${product.slug || product.id}`} className="w-full h-full flex items-center justify-center">
            <Button
              variant="outline"
              size="sm"
              className="bg-white/90 text-gray-900 hover:bg-white border-white/20 backdrop-blur-sm"
              onClick={(e) => e.stopPropagation()}
            >
              Quick View
            </Button>
          </Link>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1 min-w-0">
            <Link to={`/product/${product.slug || product.id}`} className="group-hover:text-primary transition-colors">
              {product.brand?.name && (
                <h3 className="text-sm font-medium text-gray-900 truncate">{product.brand.name}</h3>
              )}
              <p className="text-xs text-gray-500 mt-0.5 line-clamp-2 h-8">{product.name}</p>
            </Link>
          </div>
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-gray-900">${product.price}</span>
              {product.compare_at_price && product.compare_at_price > product.price && (
                <span className="text-xs text-gray-500 line-through">${product.compare_at_price}</span>
              )}
            </div>
            {discount && (
              <span className="text-xs text-green-600 font-medium">{discount}% off</span>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={(e) => {
            e.preventDefault();
            onAddToCart?.(product.id);
          }}
          className="mt-3 w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white font-medium py-1.5 text-sm rounded-lg transition-all duration-300"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;