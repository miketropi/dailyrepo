import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_POST } from "../../lib/api";

import DefaultTemplate from "../../templates/default";

export default function Article() {
  let { slug } = useParams();
  const [ loading, setLoading ] = useState(true);
  const [ post, setPost ] = useState();

  useEffect(() => {
    const _getPost = async () => {
      const result = await GET_POST(slug);
      setPost(result.post);
      setLoading(false);
    }

    _getPost();
  }, []);

  if(loading) {
    return <DefaultTemplate>
      <p>loading...</p>
    </DefaultTemplate>
  }

  return <DefaultTemplate>
    <div className="post-single">
      <div className="container-2-cols">
        <div className="site-bar">
          <div className="site-bar__inner __sticky">
            Hello
          </div>
        </div>
        <div className="content">
          <div className="post-image">
            <img src={ post.featureImage.url } alt={ post.name } />
          </div>
          <div dangerouslySetInnerHTML={{__html: post.content.html}}></div>
        </div>
      </div>
    </div>
  </DefaultTemplate>
} 