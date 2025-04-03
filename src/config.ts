// Site configuration
export const SITE = {
  name: 'AARBAA',
  title: 'Americans Against Road Bikers of America',
  description: 'Advocating for separate bike paths',
  url: 'https://aarbaa.com',
  githubUrl: 'https://github.com/username/aarbaa-website',
  listDrafts: true,
  image: {
    src: '/images/aarbaa-logo.png',
    alt: 'AARBAA Logo'
  }
};

// Theme configuration
export const THEME = {
  colors: {
    primary: '#0A3161', // Old Glory Blue
    secondary: '#B31942', // Old Glory Red
    background: '#f8f8f8',
    text: '#333333',
    heading: '#0A3161',
    link: '#B31942',
    linkHover: '#871431'
  },
  fonts: {
    body: "'Roboto', sans-serif",
    heading: "'Roboto Condensed', sans-serif"
  },
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '4rem'
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  }
};

// Navigation configuration
export const NAV_ITEMS = [
  { text: 'Home', link: '/' },
  { text: 'About', link: '/about' },
  { text: 'Issues', link: '/#issues' },
  { text: 'Shop', link: '/resources' },
  { text: 'News', link: '/blog' },
  { text: 'Contact', link: '/contact' },
  { text: 'Join Us', link: '/join', highlight: true }
];

// Footer configuration
export const FOOTER = {
  copyright: `© ${new Date().getFullYear()} AARBAA - Defending America's Roads`,
  links: [
    { text: 'Privacy Policy', link: '/privacy' },
    { text: 'Terms of Use', link: '/terms' }
  ],
  social: [
    { platform: 'facebook', link: 'https://facebook.com/', icon: 'fab fa-facebook-f' },
    { platform: 'twitter', link: 'https://twitter.com/', icon: 'fab fa-twitter' },
    { platform: 'instagram', link: 'https://instagram.com/', icon: 'fab fa-instagram' },
    { platform: 'youtube', link: 'https://youtube.com/', icon: 'fab fa-youtube' }
  ]
};