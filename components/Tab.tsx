interface TabProps {
  text: string;
}
export default function Tab({ text }: TabProps) {
  return <span className="px-4 py-2 bg-gray-100 rounded-sm text-gray-600 uppercase text-xs tracking-wider">{text}</span>;
}
