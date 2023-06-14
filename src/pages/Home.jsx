import { useState, useEffect } from "react";

import DefaultTemplate from "../templates/default";
import Welcome from "../components/Welcome";
import WidgetTopics from "../components/WidgetTopics";
import Posts from "../components/Posts";
import { GET_TOPICS } from "../lib/api" 

export default function () {
  const [topics, setTopics] = useState();

  useEffect( () => {

    const _getTopics = async () => {
      const result = await GET_TOPICS();
      setTopics(result)
    }

    _getTopics()
  }, [])

  return <DefaultTemplate>
    <Welcome 
      heading="/* { Daily Repo }" 
      desc="Tips, tricks and tutorials on the web’s most beautiful language." />

    <div className="container-2-cols">
      <div className="site-bar">
        <div className="site-bar__inner">
          <WidgetTopics topics={ topics } />
        </div>
      </div>
      <div className="content">
        <Posts />
      </div>
    </div>
  </DefaultTemplate>
}