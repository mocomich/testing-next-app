import { memo } from 'react';
import { Heading } from './Heading';

export const Header = memo(function HeaderBase() {
  return (
    <header className="h-28 bg-assets-white border-assets-ghostGray border-b-[1px] grid items-center px-4">
      <Heading />
    </header>
  );
});
