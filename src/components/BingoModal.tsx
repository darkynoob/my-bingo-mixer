interface BingoModalProps {
  onDismiss: () => void;
}

export function BingoModal({ onDismiss }: BingoModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 p-4 backdrop-blur-sm">
      <div className="bubble-panel bubble-texture bubble-pop w-full max-w-sm rounded-[2rem] px-6 py-7 text-center sm:px-7 sm:py-8">
        <div className="mb-4 text-5xl">🎉🎊🎈</div>
        <h2 className="text-4xl font-bold tracking-tight text-cyan-100 drop-shadow-[0_0_18px_rgba(122,247,255,0.35)]">
          BINGO!
        </h2>
        <p className="mt-2 text-base font-medium text-pink-100/85">
          BINGO line crushed! ⭐
        </p>

        <button
          onClick={onDismiss}
          className="bubble-pill mt-6 w-full bg-[linear-gradient(135deg,#ff4fbf,#ffcf5f)] px-6 py-3 text-base font-bold text-slate-950 shadow-[0_18px_40px_rgba(255,79,191,0.28)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          Keep Playing
        </button>

        <p className="mt-4 text-xs uppercase tracking-[0.28em] text-white/55">
          Dogfooding note: the win moment should feel like a cheer, not a checkpoint.
        </p>
      </div>
    </div>
  );
}
