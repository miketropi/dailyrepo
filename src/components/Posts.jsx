import dateFormat, { masks } from "dateformat";

export default function Posts({ posts }) {
  return <>
    {/* { JSON.stringify(posts) } */}
    { 
      posts?.page?.edges &&
      posts?.page?.edges.map( item => {
        const d = new Date(item.node.createDate);

        return <div class="post" key={ item.node.id }>
          <h2 className="post__title"><a href={ `/article/${ item.node.slug }` }>{ item.node.name }</a></h2>
          <div class="post__meta">
            <div className="post__create-date">{ dateFormat(d, "dddd, mmmm dS, yyyy") }</div>
            <div className="post__term">
              {
                (item?.node?.topics.length > 0) && 
                item.node.topics.map( t => {
                  return <a href={ `/topic/${ t.slug }` }>{ t.name }</a>
                } )
              }
            </div>
          </div>
          <div class="post__content" dangerouslySetInnerHTML={{__html: item.node.content.html}}></div>
        </div>
      } )
    }
  </>
}