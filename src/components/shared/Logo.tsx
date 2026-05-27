interface LogoProps {
  size?: number
  className?: string
}

export function Logo({ size = 32, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Loome"
    >
      <rect width="32" height="32" rx="7" fill="#0f2440"/>
      <circle cx="16" cy="17" r="8" stroke="white" strokeWidth="2.2" fill="none"/>
      <circle cx="16" cy="17" r="3.5" fill="white" opacity="0.15"/>
      <circle cx="22" cy="10" r="2.8" fill="#6b93d6"/>
    </svg>
  )
}
