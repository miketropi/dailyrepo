import { Link } from "react-router-dom"

export default function WidgetTopics({ title, topics }) {
  return <div className="widget widget-topics">
    {
      (title != null) &&
      <h6 className="widget__title">{ title }</h6>
    }
    
    {
      topics?.page?.edges &&
      <ul className="topics-list">
        {
          topics?.page?.edges.map(item => {
            return <li key={ item.node.id }>
              <Link to={ `/topic/${ item.node.slug }` }>{ item.node.name }</Link> 
              <sup>{ item.node.posts.length }</sup>
            </li>
          })
        }
      </ul>
    }
  </div>
}