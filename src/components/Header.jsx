import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'
import { mainNav } from '../nav'

function Dropdown({ item, open, onOpen, onClose }) {
  const { pathname } = useLocation()
  const active = item.children.some((c) => pathname === c.to)
  return (
    <div className={`nav-item has-menu${open ? ' is-open' : ''}`} onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        className={`nav-link${active ? ' is-active' : ''}`}
        aria-expanded={open}
        onClick={() => (open ? onClose() : onOpen())}
      >
        {item.label}
        <Icon name="chevronDown" size={16} />
      </button>
      <div className="nav-menu" role="menu">
        {item.children.map((c) => (
          <Link key={c.to} to={c.to} className="nav-menu-link" role="menuitem" onClick={onClose}>
            <strong>{c.label}</strong>
            <span>{c.desc}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null)
  const [drawer, setDrawer] = useState(false)
  const [openGroup, setOpenGroup] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()
  const navRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setDrawer(false)
    setOpenMenu(null)
    setOpenGroup(mainNav.find((item) => item.children?.some((c) => c.to === pathname))?.label ?? null)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('no-scroll', drawer)
  }, [drawer])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && (setOpenMenu(null), setDrawer(false))
    const onClick = (e) => navRef.current && !navRef.current.contains(e.target) && setOpenMenu(null)
    document.addEventListener('keydown', onKey)
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('click', onClick)
    }
  }, [])

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}${drawer ? ' menu-open' : ''}`}>
        <div className="container header-bar">
          <Logo />
          <nav className="desktop-nav" aria-label="Main" ref={navRef}>
            {mainNav.map((item) =>
              item.children ? (
                <Dropdown
                  key={item.label}
                  item={item}
                  open={openMenu === item.label}
                  onOpen={() => setOpenMenu(item.label)}
                  onClose={() => setOpenMenu(null)}
                />
              ) : (
                <div className="nav-item" key={item.to}>
                  <NavLink to={item.to} className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}>
                    {item.label}
                  </NavLink>
                </div>
              ),
            )}
          </nav>
          <div className="header-actions">
            <Link to="/early-access" className="btn btn-primary btn-sm header-cta">
              Get early access
            </Link>
            <button
              className="drawer-toggle"
              aria-label={drawer ? 'Close menu' : 'Open menu'}
              aria-expanded={drawer}
              aria-controls="mobile-menu"
              onClick={() => setDrawer((d) => !d)}
            >
              <Icon name={drawer ? 'close' : 'menu'} />
            </button>
          </div>
        </div>
      </header>
      {/* Kept outside <header>: its backdrop-filter would trap this fixed panel in iOS Safari. */}
      <div className={`drawer${drawer ? ' is-open' : ''}`} aria-hidden={!drawer} id="mobile-menu">
        <nav className="drawer-body" aria-label="Mobile">
          {mainNav
            .filter((item) => item.to !== '/contact')
            .map((item) =>
              item.children ? (
                <div key={item.label} className={`drawer-group${openGroup === item.label ? ' is-open' : ''}`}>
                  <button
                    className="drawer-row"
                    aria-expanded={openGroup === item.label}
                    onClick={() => setOpenGroup(openGroup === item.label ? null : item.label)}
                  >
                    {item.label}
                    <Icon name="chevronDown" size={20} />
                  </button>
                  <div className="drawer-panel">
                    <div className="drawer-panel-inner">
                      {item.children.map((c) => (
                        <Link
                          key={c.to}
                          to={c.to}
                          className={`drawer-sublink${pathname === c.to ? ' is-active' : ''}`}
                          tabIndex={openGroup === item.label ? 0 : -1}
                        >
                          <strong>{c.label}</strong>
                          <span>{c.desc}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={item.to} to={item.to} className={`drawer-row${pathname === item.to ? ' is-active' : ''}`}>
                  {item.label}
                  <Icon name="arrowRight" size={18} />
                </Link>
              ),
            )}
        </nav>
        <div className="drawer-footer">
          <Link to="/early-access" className="btn btn-primary">
            Get early access
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact
          </Link>
        </div>
      </div>
    </>
  )
}
