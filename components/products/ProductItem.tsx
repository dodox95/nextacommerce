// Import komponentu AddToCart
import AddToCart from '@/components/products/AddToCartGoCart';
// Istniejące importy
import { Product } from '@/lib/models/ProductModel';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Rating } from './Rating';

// Komponent ProductItem z dodanym AddToCart
export default function ProductItem({ product }: { product: Product }) {
  // Przekształć produkt na item, jeśli to konieczne
  const item = {
    ...product,
    // Możesz dodać tutaj dodatkowe pola, jeśli OrderItem wymaga więcej niż Product
  };

  return (
    <div className="card bg-base-300 shadow-xl mb-4">
      <figure>
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover h-64 w-full"
          />
        </Link>
      </figure>
      <div className="card-body">
        <Link href={`/product/${product.slug}`}>
          <h2 className="card-title font-normal">{product.name}</h2>
        </Link>
        {/*<Rating value={product.rating} caption={`(${product.numReviews})`} /> */}
        <p className="mb-2">{product.brand}</p>
        <div className="card-actions flex items-center justify-between">
          <span className="text-2xl">${product.price}</span>
          {/* Dodaj komponent AddToCart tutaj */}
          <AddToCart item={item} />
        </div>
      </div>
    </div>
  );
}
