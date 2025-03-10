
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QrCode, ShieldCheck, Info } from 'lucide-react';
import ZkExplainer from '@/components/ZkExplainer';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Index = () => {
  const navigate = useNavigate();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full py-6 px-6 flex justify-center border-b">
        <div className="max-w-4xl w-full flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-6 h-6 text-zkvm-purple" />
            <span className="text-xl font-semibold">zk-Vendify</span>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Info className="h-4 w-4" />
                <span>About</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>About the Creator</DialogTitle>
                <DialogDescription>
                  Learn more about the zk-Vendify concept and its creator
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-4">
                <div>
                  <h4 className="font-medium text-lg text-zkvm-purple">Jane Cryptographer</h4>
                  <p className="text-sm text-gray-600">Blockchain Privacy Researcher & Developer</p>
                </div>
                <p className="text-sm">
                  Jane is a privacy advocate and blockchain researcher focused on making everyday transactions more private and secure. The zk-Vendify concept was born from her doctoral research at MIT on practical applications of zero-knowledge proofs.
                </p>
                <p className="text-sm">
                  With a background in cryptography and blockchain development, Jane has been working to bring the complex mathematics of zk-SNARKs to real-world applications that benefit everyday users.
                </p>
                <div className="pt-2">
                  <h5 className="text-sm font-medium">Connect</h5>
                  <div className="flex gap-2 mt-1">
                    <a href="#" className="text-xs text-zkvm-purple hover:underline">Twitter</a>
                    <a href="#" className="text-xs text-zkvm-purple hover:underline">GitHub</a>
                    <a href="#" className="text-xs text-zkvm-purple hover:underline">Research Papers</a>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </header>
      
      {/* Main Content */}
      <main className="flex-1 w-full flex flex-col items-center px-6 pt-12 pb-16">
        <div className="max-w-2xl w-full flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-zkvm-dark mb-4">
            Private Payments for Vending Machines
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Make anonymous purchases using zk-SNARKs on the Solana blockchain. 
            No personal data, just seamless, private transactions.
          </p>
          
          <div className="w-full max-w-sm mb-12">
            <Button 
              className="zkvm-button w-full text-lg py-6 group transition-all"
              onClick={() => navigate('/product')}
            >
              <QrCode className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Scan QR Code to Pay
            </Button>
            <p className="text-sm text-gray-500 mt-2">
              Simulated for demo purposes
            </p>
          </div>
          
          <div className="w-full">
            <ZkExplainer className="w-full" />
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

export default Index;
