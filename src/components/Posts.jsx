import dateFormat, { masks } from "dateformat";
import { Link } from "react-router-dom";

export default function Posts({ posts }) {
  return <>
    {/* { JSON.stringify(posts) } */}
    { 
      posts?.page?.edges &&
      posts?.page?.edges.map( item => {
        const d = new Date(item.node.createDate);

        return <div className="post" key={ item.node.id }>
          <h2 className="post__title"><a href={ `/article/${ item.node.slug }` }>{ item.node.name }</a></h2>
          <div className="post__meta">
            <div className="post__create-date">{ dateFormat(d, "dddd, mmmm dS, yyyy") }</div>
            <div className="post__term">
              {
                (item?.node?.topics.length > 0) && 
                item.node.topics.map( t => {
                  return <Link key={ t.slug } to={ `/topic/${ t.slug }` }>{ t.name }</Link>
                } )
              }
            </div>
          </div>
          <div className="post__content" dangerouslySetInnerHTML={{__html: item.node.content.html}}></div>
        </div>
      } )
    }
  </>
}