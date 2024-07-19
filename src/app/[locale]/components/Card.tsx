import React from "react";
import Image from "next/image";

interface CardProps {
  label: string;
  value: string;
  currency: string;
}

const Card = ({ label, value, currency }: CardProps) => {
  return (
    <div className="border rounded-lg p-5 space-y-5">
      <Image
        src={`/icons/${label.toLowerCase()}.svg`}
        alt={label}
        width={100}
        onError={(e) => {
          console.log(e);
        }}
        height={100}
      />
      <div className="flex flex-col gap-2">
        <div className="font-bold">
          {label} / {currency}
        </div>
        <div className="text-gray-500">{value}</div>
      </div>
    </div>
  );
};

export default Card;
