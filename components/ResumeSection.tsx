type ResumeSectionProps = {
  title: string;
  children: React.ReactNode;
};

export default function ResumeSection({ title, children }: ResumeSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-3 border-b pb-1">{title}</h2>
      {children}
    </section>
  );
}
