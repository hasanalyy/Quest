import React from "react";

export const Indicator = ({
  className,
  iconOnlyIcon,
  override,
  text,
  type,
}) => {
  return (
    <div className={className}>
      {iconOnlyIcon}
      {override}
      <span>{text}</span>
    </div>
  );
};
