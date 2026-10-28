export function Arrow({ className = "" }: Readonly<{ className?: string }>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-[0.85em] w-[0.85em] ${className}`}
    >
      <path d="M6 18 18 6" />
      <path d="M9 6h9v9" />
    </svg>
  );
}

export function Check({ className = "" }: Readonly<{ className?: string }>) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`h-3 w-3 ${className}`}
    >
      <path d="m5 13 4 4L19 7" />
    </svg>
  );
}
