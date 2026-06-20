import * as Illustrations from './illustrations';

export const Illustration = ({ name, ...props }) => {
  const SpecificImg = Illustrations[`${name}Img`];

  if (!SpecificImg) return null;

  return <SpecificImg {...props} />;
};
