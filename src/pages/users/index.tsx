import styles from "../../styles/User.module.css"
import Link from "next/link"

interface user {
  id: number
  name: string
  username: string
  email: string
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await res.json()
  return {
    props: {
      users: data,
    },
  }
}

function users({ users }: { users: user[] }) {
  return (
    <div>
      <h1>All Users</h1>

      {users.map((user) => (
        <Link
          key={user.id}
          href={`/users/${user.id}`}
          className={styles.single}
        >
          <h3>{user.name}</h3>
        </Link>
      ))}
    </div>
  )
}

export default users
