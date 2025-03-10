
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductDisplay from '@/components/ProductDisplay';
import ZkExplainer from '@/components/ZkExplainer';

const Product = () => {
  const navigate = useNavigate();
  
  // Example products (in a real app, this would come from an API or context)
  const products = [
    { id: 1, name: "Cola Classic", price: "0.2 SOL" },
    { id: 2, name: "Sparkling Water", price: "0.15 SOL" },
    { id: 3, name: "Energy Drink", price: "0.25 SOL" },
    { id: 4, name: "Orange Juice", price: "0.18 SOL" },
    { id: 5, name: "Iced Tea", price: "0.17 SOL" },
    { id: 6, name: "Chocolate Bar", price: "0.12 SOL" },
  ];
  
  const handleSelectProduct = (productId: number) => {
    navigate(`/payment/${productId}`);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-6 flex justify-center border-b">
        <div className="max-w-4xl w-full flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-6 h-6 text-zkvm-purple" />
            <span className="text-xl font-semibold">zk-Vendify</span>
          </div>
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-500"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back
          </Button>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center px-6 pt-8 pb-16">
        <div className="max-w-2xl w-full">
          <h1 className="text-3xl font-bold text-zkvm-dark mb-6">
            Select a Product
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => handleSelectProduct(product.id)}
              >
                <ProductDisplay 
                  name={product.name} 
                  price={product.price} 
                  className="border-0 shadow-none p-0"
                />
              </div>
            ))}
          </div>
          
          <ZkExplainer compact />
        </div>
      </main>
      
      {/* Footer */}
      <footer className="w-full py-4 border-t">
        <div className="container flex justify-center">
          <p className="text-sm text-gray-500">
            zk-Vendify Demo • Powered by Solana & zk-SNARKs
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Product;
