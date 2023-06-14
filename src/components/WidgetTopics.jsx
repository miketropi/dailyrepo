export default function WidgetTopics({ title, topics }) {
  return <div className="widget widget-topics">
    {
      (title != null) &&
      <h4 className="widget-title">{ title }</h4>
    }
    
    {
      topics?.page?.edges &&
      <ul className="topics-list">
        {
          topics?.page?.edges.map(item => {
            return <li key={ item.node.id }>
              <a href={ `/topic/${ item.node.slug }` }>{ item.node.name } ({ item.node.posts.length })</a>
            </li>
          })
        }
      </ul>
    }
  </div>
}