type ProcessStep = {
  id?: string;
  label: string;
};

type ProcessStepsProps = {
  steps: ProcessStep[];
  className?: string;
};

export default function ProcessSteps({ steps, className }: ProcessStepsProps) {
  return (
    <ol className={["ui-process-steps", className].filter(Boolean).join(" ")}>
      {steps.map((step, index) => (
        <li className="ui-process-steps__item" key={step.id ?? `${index}-${step.label}`}>
          <span className="ui-process-steps__number">{String(index + 1).padStart(2, "0")}</span>
          <span>{step.label}</span>
        </li>
      ))}
    </ol>
  );
}
