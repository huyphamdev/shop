import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@shop.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Thao Nguyen',
    email: 'thaonguyen@shop.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Phuc Loi',
    email: 'loi_dap_trai@shop.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Quang Huy',
    email: 'quanghuy@shop.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
