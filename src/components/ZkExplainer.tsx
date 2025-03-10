
import React from 'react';
import { cn } from '@/lib/utils';
import { Lock, Shield, Eye } from 'lucide-react';

interface ZkExplainerProps {
  className?: string;
  compact?: boolean;
}

const ZkExplainer: React.FC<ZkExplainerProps> = ({ className, compact = false }) => {
  if (compact) {
    return (
      <div className={cn('bg-gray-50 rounded-lg p-4', className)}>
        <h3 className="text-sm font-medium flex items-center gap-2 text-zkvm-dark">
          <Lock className="w-4 h-4 text-zkvm-purple" />
          Powered by zk-SNARKs for private transactions
        </h3>
      </div>
    );
  }

  return (
    <div className={cn('bg-gray-50 rounded-lg p-6', className)}>
      <h3 className="text-lg font-semibold mb-3 text-zkvm-dark">How zk-SNARKs Keep Your Payments Private</h3>
      
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="bg-zkvm-purple bg-opacity-10 p-2 rounded-full">
            <Shield className="w-5 h-5 text-zkvm-purple" />
          </div>
          <div>
            <h4 className="font-medium text-zkvm-dark">Zero-Knowledge Proofs</h4>
            <p className="text-sm text-gray-600">Verify payments without revealing your identity or transaction details</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="bg-zkvm-purple bg-opacity-10 p-2 rounded-full">
            <Eye className="w-5 h-5 text-zkvm-purple" />
          </div>
          <div>
            <h4 className="font-medium text-zkvm-dark">Enhanced Privacy</h4>
            <p className="text-sm text-gray-600">No one can link your purchase to your wallet or identity</p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="bg-zkvm-purple bg-opacity-10 p-2 rounded-full">
            <Lock className="w-5 h-5 text-zkvm-purple" />
          </div>
          <div>
            <h4 className="font-medium text-zkvm-dark">Cryptographic Security</h4>
            <p className="text-sm text-gray-600">Secure and tamper-proof transactions on the Solana blockchain</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZkExplainer;
