export function CockpitHero() {
  return (
    <header>
      <h1
        className="flex flex-wrap items-baseline gap-[9px] pt-1 font-extrabold font-sans text-[28px] text-cyanotype-ink leading-[1.15] tracking-[-0.025em]"
        data-cockpit-hero
      >
        <span data-cockpit-hero-segment="lead">What is Yarumo</span>{' '}
        <span
          className="font-bold text-[#7ED957] italic"
          data-cockpit-hero-segment="accent"
        >
          working on
        </span>{' '}
        <span data-cockpit-hero-segment="tail">right now?</span>
      </h1>
    </header>
  )
}
