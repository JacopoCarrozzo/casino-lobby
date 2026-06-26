import { NavbarDesktop } from '@/components/layout/NavbarDesktop'
import { NavbarMobile } from '@/components/layout/NavbarMobile'

export function Navbar() {
  return (
    <>
      <div className="hidden lg:block">
        <NavbarDesktop />
      </div>
      <div className="lg:hidden">
        <NavbarMobile />
      </div>
    </>
  )
}
