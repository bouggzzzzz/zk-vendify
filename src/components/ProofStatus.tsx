
import React from 'react';
import { cn } from '@/lib/utils';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

export type ProofStatusType = 'generating' | 'verified' | 'failed' | 'waiting';

interface ProofStatusProps {
  status: ProofStatusType;
  className?: string;
}

const ProofStatus: React.FC<ProofStatusProps> = ({ status, className }) => {
  const statusConfig = {
    waiting: {
      icon: Clock,
      text: 'Waiting for proof',
      color: 'text-gray-500',
      bgColor: 'bg-gray-100',
    },
    generating: {
      icon: Clock,
      text: 'Generating proof...',
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    verified: {
      icon: CheckCircle,
      text: 'Proof verified!',
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    failed: {
      icon: AlertCircle,
      text: 'Proof verification failed',
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
  };

  const { icon: Icon, text, color, bgColor } = statusConfig[status];

  return (
    <div className={cn('flex items-center gap-2 rounded-lg p-3', bgColor, className)}>
      <Icon className={cn('w-5 h-5', color)} />
      <span className={cn('font-medium', color)}>{text}</span>
    </div>
  );
};

export default ProofStatus;
