import React from "react";

interface Props {
  styles: {
    bgColor: string;
    textColor: string;
  }[];
}
export const Colors: React.FC<Props> = (props) => {
  const { styles } = props;

  const boxClass = (i: number) =>
    `h-20 w-20 rounded flex items-center justify-center overflow-hidden ${styles[i].bgColor} ${styles[i].textColor}`;

  console.log(boxClass(0));

  return (
    <div className="flex gap-5 ">
      {styles.map((box, i) => (
        <div className={boxClass(i)}>
          <div className="text-center">
            <span className="text-xs">{box.bgColor}</span>
            <br />
            <span className="text-xs">{box.textColor}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
