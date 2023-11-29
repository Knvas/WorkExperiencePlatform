import React from 'react';

interface Props{
  icon: React.ReactNode,
  quantity: number,
  title: string
}

const InfoCard = (props: Props) => {
  return (
    <div className="w-full bg-white flex items-start rounded-lg p-6 space-x-4">
      <div>{props.icon}</div>
      <div className="space-y-1">
        <div className="text-sm font-medium text-gray-600 uppercase">{props.title}</div>
        <div className="text-3xl font-semibold text-gray-800">{props.quantity}</div>
      </div>

    </div>
  );
};

export default InfoCard;