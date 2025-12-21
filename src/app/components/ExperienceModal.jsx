export default function ExperienceModal({ open, onClose, title, children }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="
          w-full max-w-3xl
          max-h-[90vh]
          rounded-2xl
          border border-white/10
          bg-zinc-950
          shadow-xl
          flex flex-col
        "
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <button
            onClick={onClose}
            className="rounded-lg px-3 py-1 text-sm text-zinc-300 hover:bg-white/10"
            aria-label="Close modal"
          >
            Close
          </button>
        </div>

        {/* Scrollable content */}
        <div className="px-6 py-5 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
