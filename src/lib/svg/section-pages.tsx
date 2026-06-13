const techNodes = [
  [120, 160],
  [138, 97],
  [173, 128],
  [186, 171],
  [213, 88],
  [223, 159],
  [247, 116],
  [271, 145],
  [278, 87],
  [309, 116],
  [300, 162],
] as const;

const worldNodes = [
  [140, 105],
  [177, 97],
  [213, 113],
  [248, 105],
  [284, 116],
  [127, 138],
  [171, 142],
  [212, 153],
  [259, 151],
  [301, 165],
  [162, 177],
  [212, 186],
  [263, 181],
] as const;

export function TechHeroSvg() {
  return (
    <svg
      viewBox="0 0 420 260"
      className="absolute inset-x-6 top-5 h-[72%] w-[calc(100%-3rem)] text-violet-100/80"
      aria-hidden="true"
    >
      <path
        d="M120 160c-22-16-36-42-32-68 6-41 45-70 89-68 36 2 67 24 80 54 10 22 11 49 0 72"
        className="stroke-current"
        strokeWidth="1.2"
      />
      <path
        d="M150 73c22-15 50-20 77-13 37 10 65 40 71 77 3 20 0 40-9 57"
        className="stroke-current"
        strokeWidth="1.2"
      />
      <path
        d="M102 131c18 11 39 15 61 11 26-4 49-18 64-39"
        className="stroke-current"
        strokeWidth="1.2"
      />
      <path
        d="M121 173c27 4 55 0 80-13 22-11 40-29 51-51"
        className="stroke-current"
        strokeWidth="1.2"
      />
      <path
        d="M138 97l35 31 40-40 34 28 31-29"
        className="stroke-current"
        strokeWidth="1.4"
      />
      <path
        d="M139 145l47-16 37 30 48-14"
        className="stroke-current"
        strokeWidth="1.4"
      />
      <path d="M173 128l13 43" className="stroke-current" strokeWidth="1.1" />
      <path d="M213 88l10 71" className="stroke-current" strokeWidth="1.1" />
      <path d="M247 116l24 29" className="stroke-current" strokeWidth="1.1" />
      {techNodes.map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="3.5"
          fill="currentColor"
          className="text-rose-100/90"
        />
      ))}
    </svg>
  );
}

export function WorldHeroSvg() {
  return (
    <svg
      viewBox="0 0 420 260"
      className="absolute inset-0 h-full w-full text-cyan-50/85"
      aria-hidden="true"
    >
      <path
        d="M110 96c18-16 42-24 67-21 19 3 28 14 46 16 18 2 36-6 54-2 18 4 33 18 42 34"
        className="stroke-current"
        strokeWidth="1.3"
        fill="none"
      />
      <path
        d="M104 136c16-8 36-8 54-3 14 4 28 13 43 15 18 3 36-3 54 0 20 3 38 16 49 33"
        className="stroke-current"
        strokeWidth="1.3"
        fill="none"
      />
      <path
        d="M131 175c24-6 50-4 73 4 15 5 29 14 45 15 17 1 33-7 48-15"
        className="stroke-current"
        strokeWidth="1.3"
        fill="none"
      />
      {worldNodes.map(([cx, cy]) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r="3.5"
          fill="currentColor"
          className="text-cyan-100"
        />
      ))}
    </svg>
  );
}

export function BusinessHeroSvg() {
  return (
    <svg
      viewBox="0 0 420 260"
      className="absolute inset-0 h-full w-full text-emerald-100"
      aria-hidden="true"
    >
      <path
        d="M72 183 123 162 171 172 220 124 269 136 318 97 350 78"
        className="stroke-current"
        strokeWidth="4"
        fill="none"
      />
      <path
        d="M340 78h16v16"
        className="stroke-current"
        strokeWidth="4"
        fill="none"
      />
      <circle cx="123" cy="162" r="5" fill="currentColor" />
      <circle cx="220" cy="124" r="5" fill="currentColor" />
      <circle cx="318" cy="97" r="5" fill="currentColor" />
    </svg>
  );
}
