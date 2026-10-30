// Same menu, names and order as the original cognerahealth.ai site.
export const mainNav = [
  { label: 'Platform', to: '/platform' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Who We Serve', to: '/who-we-serve' },
  { label: 'Investors', to: '/investors' },
  { label: 'Trust', to: '/trust' },
  { label: 'Standards', to: '/standards' },
  {
    label: 'About',
    to: '/about',
    children: [
      { label: 'Company', to: '/about' },
      { label: 'Leadership', to: '/leadership' },
      { label: 'Partnerships', to: '/partnerships' },
      { label: 'Press', to: '/press' },
      { label: 'Careers', to: '/careers' },
    ],
  },
  { label: 'Contact', to: '/contact' },
]

// Footer "Company" links, in the original site's order.
export const footerLinks = [
  { label: 'Platform', to: '/platform' },
  { label: 'Who We Serve', to: '/who-we-serve' },
  { label: 'About Us', to: '/about' },
  { label: 'Press', to: '/press' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Investors', to: '/investors' },
  { label: 'Leadership', to: '/leadership' },
  { label: 'Careers', to: '/careers' },
  { label: 'Trust', to: '/trust' },
  { label: 'Standards', to: '/standards' },
  { label: 'Partnerships', to: '/partnerships' },
]

export const LINKEDIN = 'https://www.linkedin.com/company/cognerahealth'
