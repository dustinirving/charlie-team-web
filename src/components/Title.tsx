export default function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-pretty text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
      {children}
    </h2>
  );
}
