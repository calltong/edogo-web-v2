

const dashboard = {
  icon: 'fas fa-tachometer-alt',
  name: 'Dashboard',
  link: '/dashboard',
}

const admin = {
  icon: 'fas fa-user-cog',
  name: 'Manage Admin',
  submenu: [
    {
      name: 'Display',
      link: '/admin',
    },
    {
      name: 'Create Admin',
      link: '/admin/create',
    },
  ],
}


const side_menu = [
  dashboard,
  admin,
]

export default { side_menu }
