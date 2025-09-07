export type MenuItem = {
  title: string;
  href: string; // رابط الصفحة أو anchor
};

export const menuItems: MenuItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Profile', href: '/about' },
  { title: 'Skills', href: '/skills' },
  { title: 'Works', href: '/works' },
  { title: 'Certificates', href: '/certificates' },
  { title: 'Tools', href: '/tools' },
  { title: 'Workflow', href: '/workflow' },
  { title: 'Content', href: '/content' },
];
