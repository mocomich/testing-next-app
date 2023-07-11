import { memo } from 'react';

export const Footer = memo(function BaseFooter() {
  return (
    <footer className="h-36 border-t-[1px] grid place-content-center border-assets-ghostGray">
      <p>All rights reserved © My App</p>
    </footer>
  );
});
