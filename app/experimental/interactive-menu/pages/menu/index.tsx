import { Link } from "@remix-run/react"

export default function FirstPost() {
    return (
      <>
        <h1>First Post</h1>
        <h2>
          <Link to="/">
            <span>Back to home</span>
          </Link>
        </h2>
      </>
    )
  }