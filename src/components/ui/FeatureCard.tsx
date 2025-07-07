import React from 'react';
import type { Feature } from '../../types/index';

interface FeatureCardProps {
  feature: Feature;
  onClick?: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        {feature.icon && (
          <div className="text-4xl flex-shrink-0">
            {typeof feature.icon === 'string' ? (
              <span>{feature.icon}</span>
            ) : (
              feature.icon
            )}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-gray-900">
            {feature.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;