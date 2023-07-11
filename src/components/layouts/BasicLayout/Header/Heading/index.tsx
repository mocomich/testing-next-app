import Link from 'next/link';

export const Heading = () => {
  return (
    <h1 className="text-xl font-bold">
      <Link href={`/`} legacyBehavior>
        <a>My App</a>
      </Link>
    </h1>
  );
};
