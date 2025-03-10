
import React from 'react';
import { cn } from '@/lib/utils';

interface QRCodeProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const QRCode: React.FC<QRCodeProps> = ({ size = 'md', className }) => {
  const qrSizes = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64',
  };

  return (
    <div className={cn('relative rounded-md overflow-hidden', qrSizes[size], className)}>
      <div className="absolute inset-0 bg-white p-2">
        {/* This is a placeholder QR code design using CSS grid */}
        <div className="w-full h-full grid grid-cols-10 grid-rows-10 gap-0.5">
          {Array.from({ length: 100 }).map((_, i) => {
            // Create a pattern that resembles a QR code
            const isFixed = 
              // Position detection patterns (corners)
              (i < 30 && i % 10 < 3) || // Top-left
              (i < 30 && i % 10 > 6) || // Top-right
              (i > 69 && i % 10 < 3) || // Bottom-left
              // Add some random-looking data to the QR code
              Math.random() > 0.65;
              
            return (
              <div 
                key={i} 
                className={cn(
                  'rounded-sm',
                  isFixed ? 'bg-zkvm-dark' : 'bg-transparent'
                )}
              />
            );
          })}
        </div>
        
        {/* Solana logo overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-white bg-opacity-80 rounded-md p-1.5">
            <div className="w-8 h-8 bg-zkvm-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
              SOL
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QRCode;
