
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { CheckCircle, Power, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductDisplay from '@/components/ProductDisplay';
import ProofStatus from '@/components/ProofStatus';
import OtpDisplay from '@/components/OtpDisplay';
import { useToast } from '@/hooks/use-toast';

const Confirmation = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const { toast } = useToast();
  
  const [dispensing, setDispensing] = useState(false);
  
  // Example products (in a real app, this would come from an API or context)
  const products = [
    { id: 1, name: "Cola Classic", price: "0.2 SOL" },
    { id: 2, name: "Sparkling Water", price: "0.15 SOL" },
    { id: 3, name: "Energy Drink", price: "0.25 SOL" },
    { id: 4, name: "Orange Juice", price: "0.18 SOL" },
    { id: 5, name: "Iced Tea", price: "0.17 SOL" },
    { id: 6, name: "Chocolate Bar", price: "0.12 SOL" },
  ];
  
  // Get selected product based on URL parameter
  const selectedProduct = products.find((p) => p.id === Number(productId)) || products[0];
  
  // Generate a random 6-digit OTP
  const [otp] = useState(() => 
    Array.from({ length: 6 }, () => Math.floor(Math.random() * 10)).join('')
  );
  
  const handleDispense = () => {
    setDispensing(true);
    
    toast({
      title: "Dispensing Item",
      description: "Please collect your item from the vending machine.",
    });
    
    // Simulate dispensing process
    setTimeout(() => {
      setDispensing(false);
      
      toast({
        title: "Transaction Complete",
        description: "Thank you for using zk-Vendify!",
      });
      
      // Redirect to home after completion
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }, 2000);
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
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center px-6 pt-8 pb-16">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-zkvm-dark mb-6">
            Transaction Confirmed
          </h1>
          
          <div className="space-y-6">
            <div className="bg-green-50 border border-green-100 rounded-lg p-6 flex items-center justify-center">
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="w-16 h-16 text-green-500 mb-3" />
                <h2 className="text-xl font-semibold text-green-700">
                  Payment Successful
                </h2>
                <p className="text-sm text-green-600 mt-1">
                  Your anonymous payment has been processed
                </p>
              </div>
            </div>
            
            <ProductDisplay 
              name={selectedProduct.name} 
              price={selectedProduct.price}
              compact
            />
            
            <ProofStatus status="verified" />
            
            <OtpDisplay otp={otp} />
            
            <Button 
              className="zkvm-button w-full text-lg py-6 group"
              onClick={handleDispense}
              disabled={dispensing}
            >
              <Power className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              {dispensing ? "Dispensing..." : "Dispense Item"}
            </Button>
            
            <p className="text-sm text-gray-500 text-center">
              After dispensing, you can collect your item from the vending machine.
            </p>
          </div>
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

export default Confirmation;
