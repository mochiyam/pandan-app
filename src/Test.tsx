import React, { FC } from "react";

type Props = {
  isHappy: boolean;
  isDumb: boolean;
  names?: [string];
  genders?: [string];
};

const Test = ({ isDumb, isGay, ...rest }: Props) => {
  return (
    <div>
      {isDumb && <div>damn hes dumb</div>}
      {isHappy && <div>damn hes happy</div>}
    </div>
    <button isGay={isGay} isDumb={isDumb} ...rest />
  );
};

export default Test;
