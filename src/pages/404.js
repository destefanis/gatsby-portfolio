import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>404 Page not found</h1>
      <div style="width:100%;height:0;padding-bottom:100%;position:relative;">
        <iframe src="https://giphy.com/embed/jpbnoe3UIa8TU8LM13" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen>
        </iframe>
      </div>
      <Link to="/">Visit the home page</Link>
    </main>
  )
}

export default NotFoundPage
