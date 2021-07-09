interface SectionHeadingProps {
  text: string;
}
export default function SectionHeading({ text }: SectionHeadingProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-gray-300" />
      </div>
      <div className="relative flex justify-start">
        <span className="pr-3 bg-white text-lg font-medium text-gray-900">
          Projects
        </span>
      </div>
    </div>
    // <div className="pb-5 border-b border-gray-200">
    //   <h3 className="text-lg leading-6 font-medium text-gray-900">{text}</h3>
    // </div>
  );
}
