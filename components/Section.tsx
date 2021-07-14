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
    <div className={`py-16 sm:py-32 ${bgColor}`} id={id}>
      {children}
    </div>
  );
}
