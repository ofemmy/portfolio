interface LabelProps {
  forEl?: string;
  title: string;
}
export default function Label({ forEl = " ", title }: LabelProps) {
  return (
    <label htmlFor={forEl} className="block text-sm font-medium text-gray-200">
      {title}
    </label>
  );
}
