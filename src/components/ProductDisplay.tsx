
import React from 'react';
import { cn } from '@/lib/utils';

interface ProductDisplayProps {
  name: string;
  price: string;
  className?: string;
  compact?: boolean;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({ name, price, className, compact = false }) => {
  if (compact) {
    return (
      <div className={cn('flex justify-between items-center', className)}>
        <span className="font-medium">{name}</span>
        <span className="font-semibold text-zkvm-purple">{price}</span>
      </div>
    );
  }

  return (
    <div className={cn('border border-gray-100 rounded-lg p-4 bg-white shadow-sm', className)}>
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-gray-500">Selected item</p>
        </div>
        <div className="text-xl font-bold text-zkvm-purple">{price}</div>
      </div>
    </div>
  );
};

export default ProductDisplay;
