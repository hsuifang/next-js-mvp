interface Address {
  city: string
}
interface User {
  id: number
  name: string
  username: string
  email: string
  website: string
  address: Address
}

export default User
