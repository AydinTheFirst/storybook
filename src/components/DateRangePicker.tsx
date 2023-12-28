import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

interface Props {
  language?: "en" | "tr";
}

export const DateRangePicker: React.FC<Props> = (props) => {
  interface Props {
    startDate: string | null;
    endDate: string | null;
  }

  const [value, setValue] = useState<Props>({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };

  return (
    <Datepicker
      {...props}
      i18n={props.language}
      value={value}
      onChange={handleValueChange}
      showShortcuts={true}
      configs={{
        shortcuts: shortcuts[props.language! || "en"],
      }}
    />
  );
};

const shortcuts: { [key: string]: any } = {
  tr: {
    today: "Bugün",
    yesterday: "Dün",
    past: (past: string) => `${past} gün`,
    currentMonth: "Bu ay",
    pastMonth: "Geçen ay",
  },
};
