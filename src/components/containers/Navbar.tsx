import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { BarChart3, LogOut, Users } from 'lucide-react'

import { useAuth } from '@/context'
import { MenuBar } from '../ui/glow-menu'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Button } from '@/components/ui/button'

const Navbar: React.FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeItem, setActiveItem] = useState<string>('')
  const { getToken, getStoredUser, logout } = useAuth()

  // Update active item based on current route
  useEffect(() => {
    const path = location.pathname
    if (path === '/charts') setActiveItem("Charts")
    else if (path === '/users') setActiveItem("Users")
    else setActiveItem('')
  }, [location])

  const menuItems = [
    ...(getToken() ? [
      {
        icon: BarChart3,
        label: "Charts",
        href: "/charts",
        gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
        iconColor: "text-green-500",
      },
      ...(getToken() && getStoredUser()?.role === 'admin' ? [
        {
          icon: Users,
          label: "Users",
          href: "/users",
          gradient: "radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(79,70,229,0.06) 50%, rgba(67,56,202,0) 100%)",
          iconColor: "text-indigo-500",
        },
      ] : []),
      {
        icon: LogOut,
        label: "Logout",
        href: null,
        gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
        iconColor: "text-red-500",
        isLogout: true,
      },
    ] : []),
  ]

  const handleItemClick = (label: string) => {
    setActiveItem(label)
    const item = menuItems.find(item => item.label === label)
    if (item) {
      if (item.isLogout) {
        // Handle logout
        logout()
        navigate('/')
      } else if (item.href) {
        // Handle navigation
        navigate(item.href)
      }
    }
  }

  return (
    <nav className="bg-[#F7F6F3]/90 backdrop-blur-md border-b border-white/60 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-end">
        <div className="flex items-center justify-center md:justify-end gap-4">
          {menuItems.length > 0 && (
            <MenuBar
              items={menuItems}
              activeItem={activeItem}
              onItemClick={handleItemClick}
              className="bg-white/70 backdrop-blur-md border border-gray-200/60"
            />
          )}

          <HoverCard openDelay={100} closeDelay={150}>
            <HoverCardTrigger asChild>
              <button
                className="inline-flex items-center justify-center rounded-full border border-gray-900 bg-black px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white shadow-lg transition-all duration-200 hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
              >
                Complimentary Membership
              </button>
            </HoverCardTrigger>
            <HoverCardContent align="end" className="w-80 bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl">
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">Exclusive Access</p>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    Log in or request a complimentary seat to unlock hourly, MLS-verified intel on Houston’s established
                    luxury neighborhoods.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Button asChild size="lg" className="w-full bg-black text-white hover:bg-gray-900">
                    <Link to="/login">Log in to your account</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full border-gray-900 text-gray-900 hover:bg-gray-50">
                    <Link to="/signup">Create complimentary account</Link>
                  </Button>
                </div>
                <p className="text-xs italic text-gray-500">
                  Invitations keep the platform focused on the buyers, sellers, and advisors shaping Houston’s ultra-luxury market.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
