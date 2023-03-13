import Link from "next/link";

const MediaItem = <T extends string, U extends React.ReactNode>({
  href,
  icon,
}: {
  href: T;
  icon: U;
}): JSX.Element => {
  return (
    <Link
      href={href}
      className="flex justify-center items-center text-white w-12 h-12 border-2 ml-6 border-white border-solid  rounded-full hover:border-yellow-300 active:border-yellow-300 hover:text-yellow-300 active:text-yellow-300"
    >
      <div className="text-inherit">{icon}</div>
    </Link>
  );
};

export default MediaItem;
