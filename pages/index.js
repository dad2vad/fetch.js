import React from 'react'
import Link from 'next/link'
import fetch from '../fetch'

function Index(props) {
  return (
    <div>
      <p>Next.js has {props.stars} ⭐️</p>
      <Link href="/preact">
        <a>How about preact?</a>
      </Link>
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch('https://is.gd/Jsondoc')
  console.info(res)
  const json = await res.json() // better use it inside try .. catch
  return { stars: json }
}

export default Index
