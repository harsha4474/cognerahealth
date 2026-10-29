import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo'
import Icon from './Icon'
import { mainNav } from '../nav'

function Dropdown({ item, open, onOpen, onClose }) {
  const { pathname } = useLocation()
  const active = item.children.some((c) => pathname === c.to)
  return (
    <div
      className={`nav-item has-menu${open ? ' is-open' : ''}`}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
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
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
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
            onClick={() => setDrawer((d) => !d)}
          >
            <Icon name={drawer ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      <div className={`drawer${drawer ? ' is-open' : ''}`} aria-hidden={!drawer}>
        <nav aria-label="Mobile">
          {mainNav.map((item) =>
            item.children ? (
              <details key={item.label} className="drawer-group">
                <summary>
                  {item.label}
                  <Icon name="chevronDown" size={18} />
                </summary>
                {item.children.map((c) => (
                  <Link key={c.to} to={c.to} className="drawer-sublink">
                    {c.label}
                  </Link>
                ))}
              </details>
            ) : (
              <Link key={item.to} to={item.to} className="drawer-link">
                {item.label}
              </Link>
            ),
          )}
          <Link to="/early-access" className="btn btn-primary drawer-cta">
            Get early access
          </Link>
        </nav>
      </div>
    </header>
  )
}
