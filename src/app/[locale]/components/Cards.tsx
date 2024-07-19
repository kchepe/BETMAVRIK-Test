"use client";

import React, { useState } from "react";
import SelectField, { LocaleType } from "./SelectField";
import Card from "./Card";
import { useTranslations } from "next-intl";
import { useRouter, useParams } from "next/navigation";
import { ServerCrash } from "lucide-react";

interface CardsProps {
  exchangeRatesData: {
    success: boolean;
    data: {
      currency: string;
      rates: { label: string; value: string }[];
    } | null;
    message: string;
  };
}

const Cards = ({ exchangeRatesData }: CardsProps) => {
  const t = useTranslations();
  const { push } = useRouter();
  const { locale } = useParams();
  const handleChangeLanguage = (selectedLanguage: LocaleType) => {
    push(`/${selectedLanguage}`);
  };

  if (!exchangeRatesData.success) {
    return (
      <div className="flex w-full items-center text-gray-500 gap-4 justify-center p-36 flex-col">
        <ServerCrash className="text-blue-500 h-36 w-36" />
        {exchangeRatesData.message}
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <span className="font-bold text-lg">{t("welcome")}</span>
        <SelectField
          value={locale}
          onChange={(event) => {
            handleChangeLanguage(event.target.value as LocaleType);
          }}
        />
      </div>
      <div className="grid lg:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-4">
        {exchangeRatesData.data?.rates.map((rate, index) => (
          <Card
            key={`${rate.label}-${index}}`}
            label={rate.label}
            value={rate.value}
            currency={exchangeRatesData.data?.currency ?? ""}
          />
        ))}
      </div>
    </div>
  );
};

export default Cards;
