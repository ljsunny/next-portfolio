export default function ExperienceCard({ item, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full text-left rounded-2xl border border-white/10 bg-white/5 p-5 hover:bg-white/10 transition items-start"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-bold text-white">{item.company}</h3>
          <p className="mt-1 text-sm text-zinc-400">
            {item.role} · {item.period}
          </p>
        </div>
        <span className="text-xs text-zinc-400 group-hover:text-zinc-200 transition">
        </span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-zinc-200"
          >
            {tag}
          </span>
        ))}
      </div>

      {item.summary && (
      <ul className="mt-4 space-y-1 text-sm text-zinc-300 list-disc list-inside">
        {item.summary.map((line, i) => (
          <li key={i}>{line}</li>
        ))}
      </ul>
    )}
    </button>
  );
}