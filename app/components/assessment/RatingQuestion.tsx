import { RATING_LABELS } from "@/lib/assessment/types";

type RatingQuestionProps = {
  questionNumber: number;
  text: string;
  value: number | undefined;
  onChange: (value: number) => void;
};

export default function RatingQuestion({
  questionNumber,
  text,
  value,
  onChange,
}: RatingQuestionProps) {
  return (
    <fieldset className="rounded-sm border border-white/10 bg-navy-800/50 p-5 sm:p-6">
      <legend className="sr-only">{text}</legend>
      <p className="text-sm font-medium leading-relaxed text-white/85 sm:text-base">
        <span className="mr-2 text-gold-400">{questionNumber}.</span>
        {text}
      </p>

      <div className="mt-5 grid gap-2 sm:grid-cols-5">
        {[1, 2, 3, 4, 5].map((rating) => (
          <label
            key={rating}
            className={`flex cursor-pointer flex-col items-center rounded-sm border px-2 py-3 text-center transition-all sm:px-3 ${
              value === rating
                ? "border-gold-500/50 bg-gold-500/10 text-gold-400"
                : "border-white/10 bg-navy-950/40 text-white/60 hover:border-gold-500/25 hover:text-gold-400"
            }`}
          >
            <input
              type="radio"
              name={`question-${questionNumber}`}
              value={rating}
              checked={value === rating}
              onChange={() => onChange(rating)}
              className="sr-only"
            />
            <span className="text-lg font-bold">{rating}</span>
            <span className="mt-1 hidden text-[10px] font-semibold uppercase leading-tight tracking-wide sm:block">
              {RATING_LABELS[rating]}
            </span>
          </label>
        ))}
      </div>

      {value !== undefined && (
        <p className="mt-3 text-center text-xs text-white/40 sm:hidden">
          {RATING_LABELS[value]}
        </p>
      )}
    </fieldset>
  );
}
