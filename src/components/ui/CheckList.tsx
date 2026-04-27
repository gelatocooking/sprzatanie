type CheckListProps = {
  items: string[];
  compact?: boolean;
  className?: string;
};

export default function CheckList({ items, compact, className }: CheckListProps) {
  return (
    <ul
      className={["ui-checklist", compact ? "ui-checklist--compact" : "", className]
        .filter(Boolean)
        .join(" ")}
    >
      {items.map((item) => (
        <li className="ui-checklist__item" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
