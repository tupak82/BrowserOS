import { cn } from '@/lib/utils'

export interface SidebarBrandingProps {
  expanded?: boolean
}

/**
 * Yarumo Browser brand chip.
 *
 * The compact mark intentionally uses only CSS/text so the fork never falls
 * back to the BrowserOS logo while the final Yarumo Browser native icon is
 * still being produced. The permanent icon will replace this chip once the
 * audited 1024x1024 master asset is available.
 */
export function SidebarBranding({ expanded = false }: SidebarBrandingProps) {
  return (
    <div className="flex h-14 shrink-0 items-center gap-3 px-3">
      <div
        role="img"
        aria-label="Yarumo Browser"
        className="flex size-8 shrink-0 items-center justify-center rounded-md bg-[#7ED957] font-black text-[#0F2D1F] text-lg shadow-card"
      >
        Y
      </div>
      <span
        className={cn(
          'truncate font-extrabold text-base tracking-tight transition-opacity duration-200',
          expanded ? 'opacity-100' : 'opacity-0',
        )}
      >
        Yarumo Browser
      </span>
    </div>
  )
}
