
import React from 'react';
import { cn } from '@/lib/utils';

interface OtpDisplayProps {
  otp: string;
  className?: string;
}

const OtpDisplay: React.FC<OtpDisplayProps> = ({ otp, className }) => {
  return (
    <div className={cn('border border-gray-200 rounded-lg p-4 bg-gray-50', className)}>
      <p className="text-sm text-gray-500 mb-1">One-Time Password (OTP)</p>
      <div className="flex justify-center">
        <div className="grid grid-flow-col gap-2">
          {otp.split('').map((digit, index) => (
            <div 
              key={index} 
              className="w-10 h-12 flex items-center justify-center bg-white border border-gray-300 rounded-md text-xl font-bold text-zkvm-dark"
            >
              {digit}
            </div>
          ))}
        </div>
      </div>
      <p className="text-xs text-gray-400 mt-2 text-center">Enter this code on the vending machine</p>
    </div>
  );
};

export default OtpDisplay;
