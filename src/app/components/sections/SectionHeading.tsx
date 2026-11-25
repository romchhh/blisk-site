type SectionHeadingProps = {
  title: React.ReactNode
  lead?: React.ReactNode
  centered?: boolean
}

function HeadingMark() {
  return (
    <svg
      className="section-heading-mark"
      viewBox="0 0 240 12"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className="section-heading-stroke"
        d="M1 8.5 C 40 2.5, 90 2.5, 120 6.5 S 200 11, 239 5.5"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export function SectionHeading({ title, lead, centered = false }: SectionHeadingProps) {
  return (
    <div className={`section-intro${centered ? ' section-intro-center' : ''}`}>
      <h2 className="section-heading">
        <span className="section-heading-text">{title}</span>
        <span className="section-heading-rule" aria-hidden="true">
          <HeadingMark />
        </span>
      </h2>
      {lead ? <p className="section-lead">{lead}</p> : null}
    </div>
  )
}
