// CartModal.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useCartService from '@/lib/hooks/useCartStore';

const CartModal = () => {
  const { items, itemsPrice, decrease, increase } = useCartService();

  if (items.length === 0) {
    return (
      <div className="absolute right-0 p-3 w-72 bg-white shadow-lg z-50">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  // Ustawienie wysokości dla 7 elementów listy.
  // Jeśli jeden element listy ma więcej niż 50px, zmień wartość poniżej odpowiednio.
  const maxHeightForSevenItems = 50 * 7;

  return (
    <div className="absolute right-0 p-3 w-72 bg-white shadow-lg z-50" 
         style={{ maxHeight: `${maxHeightForSevenItems}px`, overflowY: items.length > 7 ? 'scroll' : 'hidden' }}>
      <ul>
        {items.map((item, index) => (
          <li key={item.slug} className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <Image src={item.image} alt={item.name} width={30} height={30} />
              <span className="ml-2">{item.name}</span>
            </div>
            <div className="flex items-center">
              <button className="btn btn-xs" type="button" onClick={() => decrease(item)}>
                -
              </button>
              <span className="mx-2">{item.qty}</span>
              <button className="btn btn-xs" type="button" onClick={() => increase(item)}>
                +
              </button>
            </div>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-2">
        <div>
          <span className="font-bold">Subtotal:</span> ${itemsPrice}
        </div>
        <Link href="/cart">
          <button className="btn btn-primary">View Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default CartModal;
