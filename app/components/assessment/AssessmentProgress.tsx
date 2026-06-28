type AssessmentProgressProps = {
  currentStep: number;
  totalSteps: number;
  label: string;
};

export default function AssessmentProgress({
  currentStep,
  totalSteps,
  label,
}: AssessmentProgressProps) {
  const percent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="mb-8">
      <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-white/50">
        <span>{label}</span>
        <span>
          Step {currentStep} of {totalSteps}
        </span>
      </div>
      <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-navy-800">
        <div
          className="h-full rounded-full bg-gold-500 transition-all duration-300"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}
