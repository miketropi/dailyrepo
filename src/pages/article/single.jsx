import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import dateFormat from "dateformat";
import { GET_POST } from "../../lib/api";

import DefaultTemplate from "../../templates/default";
import Gallery from "../../components/Gallery";
import { useTitle } from "../../lib/reactUse";

export default function Article() {
  let { slug } = useParams();
  const [ title, setTitle ] = useState();
  const [ loading, setLoading ] = useState(true);
  const [ post, setPost ] = useState();
  useTitle( title ); // update title page

  useEffect(() => {
    const _getPost = async () => {
      const result = await GET_POST(slug);
      setPost(result.post);
      setLoading(false);
      setTitle(result.post.name);
    }

    _getPost();
  }, []);

  if(loading) {
    return <DefaultTemplate>
      <p>loading...</p>
    </DefaultTemplate>
  }
  
  
  const d = new Date(post.createDate);

  return <DefaultTemplate>
    <div className="post-single post">
      <div className="container-2-cols">
        <div className="site-bar">
          <div className="site-bar__inner __sticky">
            <h2 className="post__title">{ post.name }</h2>
            <div className="post__meta">
              <div className="post__create-date">{ dateFormat(d, "dddd, mmmm dS, yyyy") }</div>
              <div className="post__tag">
                {
                  (post.topics.length > 0) && 
                  post.topics.map( t => {
                    return <Link key={ t.slug } to={ `/topic/${ t.slug }` }>{ t.name }</Link>
                  } )
                }
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="post__image">
            <img src={ post.featureImage.url } alt={ post.name } />
          </div>
          <div className="post__content" dangerouslySetInnerHTML={{__html: post.content.html}}></div>
          {
            (post.gallery.length > 0) &&
            post.gallery.map(g => {
              return <Gallery 
                key={ g.id }
                heading={ g.name } 
                description={ g.description } 
                gallery={ g.images } />;
            })
          }
        </div>
      </div>
    </div>
  </DefaultTemplate>
} 