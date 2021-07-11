interface TabProps {
  children: React.ReactNode;
}
export default function Tab({ children }: TabProps) {
  return (
    <div className="px-2 py-1 bg-gray-100 rounded-sm space-x-2 inline-flex">
      {children}
    </div>
  );
}
