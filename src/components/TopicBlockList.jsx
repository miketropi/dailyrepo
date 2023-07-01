import { Link } from "react-router-dom";
import dateFormat from "dateformat";

export default function TopicBlockList({ topics }) {
  return <div className="topic-block-list">
    {
      topics.map((_t) => {
        const { id, name, featureImage, slug, createDate, posts } = _t.node;
        const d = new Date(createDate);
        return <div className="term term__item" key={ id }>
          <div className="term__inner">
            <Link to={ `/topic/${ slug }` }>
              <img className="term__image" src={ featureImage.url } alt={ name } />
            </Link>
            <div className="term__entry">
              <h4>
                <Link to={ `/topic/${ slug }` }>{ name }</Link> 
                <sup>
                  <small>{ posts.length }</small>
                </sup>
              </h4>
              <div className="term__create-date">{ dateFormat(d, "dddd, mmmm dS, yyyy") }</div>
            </div>
          </div>
        </div>
      })
    }
  </div>
}