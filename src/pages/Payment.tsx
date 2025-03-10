
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductDisplay from '@/components/ProductDisplay';
import QRCode from '@/components/QRCode';
import ProofStatus, { ProofStatusType } from '@/components/ProofStatus';
import ZkExplainer from '@/components/ZkExplainer';
import { useToast } from '@/hooks/use-toast';

const Payment = () => {
  const navigate = useNavigate();
  const { productId } = useParams<{ productId: string }>();
  const { toast } = useToast();
  
  const [proofStatus, setProofStatus] = useState<ProofStatusType>('waiting');
  const [isGenerating, setIsGenerating] = useState(false);
  
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
  
  const handleGenerateProof = () => {
    setIsGenerating(true);
    setProofStatus('generating');
    
    toast({
      title: "Generating zk-Proof",
      description: "This process protects your privacy by creating a zero-knowledge proof.",
    });
    
    // Simulate proof generation (would be done via a ZK library in a real app)
    setTimeout(() => {
      setProofStatus('verified');
      setIsGenerating(false);
      
      toast({
        title: "Proof Generated Successfully",
        description: "Your transaction is ready to be submitted.",
      });
    }, 2500);
  };
  
  const handleSubmitProof = () => {
    toast({
      title: "Proof Submitted",
      description: "Redirecting to confirmation page...",
    });
    
    // Navigate to confirmation page
    setTimeout(() => {
      navigate(`/confirmation/${productId}`);
    }, 1000);
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
            onClick={() => navigate('/product')}
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back
          </Button>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center px-6 pt-8 pb-16">
        <div className="max-w-md w-full">
          <h1 className="text-3xl font-bold text-zkvm-dark mb-6">
            Payment
          </h1>
          
          <div className="space-y-6">
            <ProductDisplay 
              name={selectedProduct.name} 
              price={selectedProduct.price}
            />
            
            <div className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <h2 className="text-lg font-semibold mb-4 flex items-center">
                <QrCode className="w-5 h-5 text-zkvm-purple mr-2" />
                Scan to Pay
              </h2>
              
              <div className="flex justify-center mb-4">
                <QRCode size="md" />
              </div>
              
              <p className="text-sm text-gray-500 text-center mb-6">
                Scan this QR code with your Solana wallet app
              </p>
              
              <div className="space-y-3">
                <ProofStatus status={proofStatus} />
                
                <Button 
                  className="zkvm-button w-full"
                  onClick={handleGenerateProof}
                  disabled={isGenerating || proofStatus === 'verified'}
                >
                  Generate zk-Proof
                </Button>
                
                <Button
                  className="zkvm-secondary-button w-full"
                  onClick={handleSubmitProof}
                  disabled={proofStatus !== 'verified'}
                >
                  Submit Proof
                </Button>
              </div>
            </div>
            
            <ZkExplainer compact />
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

export default Payment;
