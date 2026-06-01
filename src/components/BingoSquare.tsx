import type { BingoSquareData } from '../types';

interface BingoSquareProps {
  square: BingoSquareData;
  isWinning: boolean;
  onClick: () => void;
}

export function BingoSquare({ square, isWinning, onClick }: BingoSquareProps) {
  const baseClasses =
    'group relative flex min-h-0 items-center justify-center overflow-hidden rounded-[1.35rem] border-2 px-2 py-2 text-center text-white transition-all duration-200 select-none';

  const stateClasses = square.isMarked
    ? isWinning
      ? 'border-cyan-200 bg-[linear-gradient(160deg,rgba(122,247,255,0.95),rgba(255,207,95,0.92))] text-slate-950 shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_16px_30px_rgba(122,247,255,0.36)]'
      : 'border-pink-300/80 bg-[linear-gradient(160deg,rgba(255,79,191,0.7),rgba(96,47,167,0.78))] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.15),0_14px_28px_rgba(255,79,191,0.25)]'
    : 'border-white/10 bg-white/8 text-white/88 hover:-translate-y-0.5 active:translate-y-0 active:bg-white/12';

  const freeSpaceClasses = square.isFreeSpace
    ? 'border-cyan-200/70 bg-[linear-gradient(160deg,rgba(122,247,255,0.28),rgba(255,255,255,0.08))] text-cyan-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_0_0_1px_rgba(122,247,255,0.12)]'
    : '';

  const labelClasses = square.isFreeSpace
    ? 'max-w-[78%] text-[9px] font-bold uppercase tracking-[0.08em] leading-[1.05] sm:text-[10px]'
    : square.text.length >= 25
      ? 'max-w-[84%] text-[8.5px] font-semibold leading-[1.18] sm:text-[9.5px]'
      : square.text.length >= 20
        ? 'max-w-[84%] text-[9.5px] font-semibold leading-[1.16] sm:text-[10.5px]'
        : 'max-w-[84%] text-[10.5px] font-semibold leading-[1.12] sm:text-[11px]';

  return (
    <button
      onClick={onClick}
      disabled={square.isFreeSpace}
      className={`${baseClasses} ${stateClasses} ${freeSpaceClasses}`}
      aria-pressed={square.isMarked}
      aria-label={square.isFreeSpace ? 'Free space' : square.text}
    >
      <span className={`block text-balance break-words text-center drop-shadow-[0_1px_0_rgba(0,0,0,0.2)] ${labelClasses}`}>
        {square.text}
      </span>
      {square.isMarked && !square.isFreeSpace && (
        <span className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-white/16 text-[10px] font-bold text-white/95 ring-1 ring-white/15">
          ✓
        </span>
      )}
    </button>
  );
}
