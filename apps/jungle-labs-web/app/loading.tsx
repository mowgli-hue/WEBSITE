export default function Loading() {
  return (
    <div className="section-shell pt-20 pb-16 animate-pulse">
      <div className="skeleton mb-4 h-4 w-24 rounded-full" />
      <div className="skeleton mb-3 h-12 w-3/4 rounded-2xl" />
      <div className="skeleton mb-2 h-5 w-1/2 rounded-xl" />
      <div className="skeleton h-5 w-2/3 rounded-xl" />
      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="skeleton h-44 rounded-3xl" />
        ))}
      </div>
    </div>
  );
}
