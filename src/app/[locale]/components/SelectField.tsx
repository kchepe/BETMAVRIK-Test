import React, { InputHTMLAttributes } from "react";

export type LocaleType = "en" | "ja";

const SelectField = (
  props: Omit<InputHTMLAttributes<HTMLSelectElement>, "className">
) => {
  const localOptions: { label: string; id: LocaleType }[] = [
    { label: "English", id: "en" },
    { label: "Japanese", id: "ja" },
  ];
  return (
    <div>
      <select
        {...props}
        className="block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-900 sm:text-sm sm:leading-6"
      >
        {localOptions.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
