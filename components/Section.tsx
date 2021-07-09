interface SectionProps {
  bgColor?: string;
  id?: string;
  children: React.ReactNode;
}
export default function Section({
  bgColor = "",
  id = "",
  children,
}: SectionProps) {
  return (
    <div className="min-h-screen py-32" id={id}>
      {children}
    </div>
  );
}
