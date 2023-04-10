export default interface IUser {
  name: string
  email: string
  role: 'user' | 'admin'
  token: string | undefined
}