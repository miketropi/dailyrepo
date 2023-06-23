import { Link } from "react-router-dom";

export default function() {
  return <nav>
    <ul>
      <li><Link to={ '/' }>Home</Link></li>
      <li><Link to={ '/topics' }>Topics</Link></li>
      {/* <li><Link to={ '/about' }>About</Link></li>
      <li><Link to={ '/contact' }>Contact</Link></li> */}
    </ul>
  </nav>
}