import Link from 'next/link';

interface LinkComponentProps {
  title: string;
  href: string;
  className?: string;
}

// export default function LinkComponent({
//   title,
//   href,
//   className = 'text-black hover:text-gray-700 visited:text-black no-underline',
// }: LinkComponentProps) {
//   return (
//     <>
//       <Link href={href} className={className}>
//         {title}
//       </Link>
//     </>
//   );
// }

const LinkComponent = ({
  title,
  href,
  className = 'text-black hover:text-gray-700 visited:text-black no-underline',
}: LinkComponentProps) => {
  return (
    <>
      <Link href={href} className={className}>
        {title}
      </Link>
    </>
  );
};
export default LinkComponent;
