import Link from "next/link";

type StoryProps = { imageUrl: string; title: string };

function Story({ imageUrl, title }: StoryProps) {
  return (
    <li className="flex flex-col items-center gap-[2px]">
      <div className="bg-gradient-to-tr from-pink-600 to-purple-600 p-[.2rem] rounded-full">
        <Link href={"#"} className="block bg-white p-[2px] rounded-full">
          <img className="w-16 h-16 rounded-full" src={imageUrl} alt={title} />
        </Link>
      </div>

      <span>{title}</span>
    </li>
  );
}

export default Story;
