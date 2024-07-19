"use server";

export const fetcgExchangeRates = async (currency: string) => {
  try {
    const response = await fetch(
      `https://api.coinbase.com/v2/exchange-rates?currency=${currency}`
    );
    const data = await response.json();
    const formattedRates = Object.entries(data.data.rates).map(
      ([key, value]) => ({
        label: key,
        value: new Intl.NumberFormat("en-US", {
          style: "decimal",
          minimumFractionDigits: 2,
          maximumFractionDigits: 8,
        }).format(value as number),
      })
    );
    return {
      success: true,
      data: { currency: data.data.currency, rates: formattedRates },
      message: "",
    };
  } catch {
    return {
      success: false,
      data: null,
      message: "Unable to fetch data from server. Please try again later",
    };
  }
};
