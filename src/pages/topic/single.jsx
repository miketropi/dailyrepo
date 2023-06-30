import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { GET_TOPIC } from '../../lib/api';
import dateFormat from "dateformat";
import DefaultTemplate from "../../templates/default"

export default function Topic() {
  const { slug } = useParams();
  const [ loading, setLoading ] = useState(true);
  const [ topic, setTopic ] = useState();

  const __getTopic = async () => {
    const result = await GET_TOPIC(slug);
    setTopic(result.topic);
    setLoading(false);
  }

  useEffect(() => {
    __getTopic();
  }, []);

  if(loading == true) {
    return <DefaultTemplate>
      Loading...
    </DefaultTemplate>
  }

  const d = new Date(topic.createDate);

  return <DefaultTemplate>
    <div className="term">
      <div className="container-2-cols">
        <div className="site-bar">
          <div className="site-bar__inner __sticky">
            <div className="term__info">
              <img className="term__thumb" src={ topic.featureImage.url } alt={ topic.name } />
              <div className="term__entry">
                <h2>{ topic.name }</h2>
                <div className="term-meta">
                  <div className="term__create-date">{ dateFormat(d, "dddd, mmmm dS, yyyy") }</div>
                </div>
              </div>
            </div>
            <div className="term__desc" dangerouslySetInnerHTML={{__html: topic.description.html}}></div>
          </div>
        </div>
        <div className="content">
          {
            (topic.posts && topic.posts.length > 0) &&
            <div className="post-by-term">
              <h4>Posts</h4>
              {
                topic.posts.map((p, _index) => {
                  let d = new Date(p.createDate);
                  return <div className="post-by-term__item">
                    <h4>
                      <Link to={ `/article/${ p.slug }` }>{ _index + 1 }, { p.name }</Link>
                    </h4>
                    <span className="p-create-date">{ dateFormat(d, "dddd, mmmm dS, yyyy") }</span>
                  </div>
                })
              }
            </div>
          }
        </div>
      </div>
    </div>
  </DefaultTemplate>
}