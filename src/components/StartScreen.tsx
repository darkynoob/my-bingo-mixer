interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex min-h-full flex-col items-center justify-center overflow-hidden px-5 py-10 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,127,209,0.28),_transparent_28%),radial-gradient(circle_at_right,_rgba(122,247,255,0.18),_transparent_24%),radial-gradient(circle_at_bottom_left,_rgba(255,207,95,0.2),_transparent_30%)]" />
      <div className="pointer-events-none absolute left-4 top-10 h-24 w-24 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-14 right-6 h-28 w-28 rounded-full bg-pink-300/10 blur-3xl" />

      <div className="bubble-panel bubble-texture bubble-pop relative z-10 w-full max-w-md rounded-[2rem] px-6 py-8 text-center sm:px-8 sm:py-10">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-pink-100/90">
          Anime Bubble Match
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-white drop-shadow-[0_0_24px_rgba(255,79,191,0.45)] sm:text-6xl">
          Bingo Mixer
        </h1>
        <p className="mt-3 text-xl font-medium text-pink-100/95 sm:text-2xl">
          Squad up, let&apos;s win!
        </p>

        <div className="mt-8 rounded-[1.75rem] border border-white/10 bg-white/7 p-5 text-left shadow-[0_20px_60px_rgba(12,10,28,0.3)]">
          <h2 className="mb-3 text-lg font-semibold text-cyan-100">How to play</h2>
          <ul className="space-y-3 text-sm leading-6 text-white/82 sm:text-base">
            <li>• Find people who match the questions</li>
            <li>• Tap a square when you find a match</li>
            <li>• Get 5 in a row to win!</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="mt-8 w-full rounded-full bg-[linear-gradient(135deg,#ff4fbf,#7af7ff)] px-8 py-4 text-lg font-bold text-slate-950 shadow-[0_18px_50px_rgba(255,79,191,0.35)] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          Let&apos;s Go!
        </button>

        <p className="mt-4 text-sm text-white/68">
          Dogfooding note: the first 30 seconds should feel like a spark, not a tutorial.
        </p>
      </div>
    </div>
  );
}
