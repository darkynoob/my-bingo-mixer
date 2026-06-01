import type { BingoSquareData } from '../types';
import { BingoBoard } from './BingoBoard';

interface GameScreenProps {
  board: BingoSquareData[];
  winningSquareIds: Set<number>;
  hasBingo: boolean;
  onSquareClick: (squareId: number) => void;
  onReset: () => void;
}

export function GameScreen({
  board,
  winningSquareIds,
  hasBingo,
  onSquareClick,
  onReset,
}: GameScreenProps) {
  return (
    <div className="relative flex min-h-full flex-col overflow-hidden px-4 pb-5 pt-4 text-white sm:px-6 sm:pb-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,127,209,0.26),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(122,247,255,0.14),_transparent_24%),linear-gradient(180deg,rgba(10,8,24,0.22),rgba(10,8,24,0.78))]" />

      <header className="bubble-panel bubble-pill bubble-texture relative z-10 flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
        <button
          onClick={onReset}
          className="rounded-full border border-white/12 bg-white/6 px-4 py-2 text-sm font-semibold text-white/80 transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0"
        >
          ← Back
        </button>
        <div className="text-center">
          <h1 className="text-lg font-bold tracking-wide text-white sm:text-xl">Bingo Mixer</h1>
          <p className="text-[11px] uppercase tracking-[0.32em] text-pink-100/70">Bubble battle mode</p>
        </div>
        <div className="w-20" />
      </header>

      <p className="relative z-10 py-3 text-center text-sm font-medium text-pink-100/82 sm:text-base">
        Tap a square when you find someone who matches it.
      </p>

      {hasBingo && (
        <div className="bubble-panel bubble-pill relative z-10 mx-auto mb-3 w-full max-w-md px-4 py-3 text-center text-sm font-semibold text-cyan-100 shadow-[0_18px_48px_rgba(122,247,255,0.16)]">
          🎉 BINGO POWER ACTIVATED! ✨
        </div>
      )}

      <div className="relative z-10 flex flex-1 items-center justify-center py-4">
        <BingoBoard
          board={board}
          winningSquareIds={winningSquareIds}
          onSquareClick={onSquareClick}
        />
      </div>
    </div>
  );
}
