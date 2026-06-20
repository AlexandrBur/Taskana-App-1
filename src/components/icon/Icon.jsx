import * as Icons from './icons';

export const Icon = ({ name, ariaHidden = true, ...props }) => {
  const SpecificIcon = Icons[`${name}Icon`];

  if (!SpecificIcon) return null;

  return (
    <SpecificIcon
      aria-hidden={ariaHidden}
      {...props}
    />
  );
};
