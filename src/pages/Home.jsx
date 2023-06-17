import { useState, useEffect } from "react";

import DefaultTemplate from "../templates/default";
import Welcome from "../components/Welcome";
import WidgetTopics from "../components/WidgetTopics";
import Posts from "../components/Posts";
import { GET_TOPICS, GET_POSTS } from "../lib/api" 

export default function () {
  const [topics, setTopics] = useState();
  const [posts, setPosts] = useState();

  useEffect( () => {

    const _getTopics = async () => {
      const result = await GET_TOPICS();
      setTopics(result)
    }

    const _getPosts = async () => {
      const result = await GET_POSTS();
      setPosts(result);
    }

    _getTopics();
    _getPosts();
  }, [])

  return <DefaultTemplate>
    <Welcome 
      heading="/* { Daily Repo }" 
      desc="Tips, tricks and tutorials on the web’s most beautiful language." />

    <div className="container-2-cols">
      <div className="site-bar">
        <div className="site-bar__inner __sticky">
          <WidgetTopics topics={ topics } title="Topics" />
        </div>
      </div>
      <div className="content">
        <Posts posts={ posts } />
      </div>
    </div>
  </DefaultTemplate>
}