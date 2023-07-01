import { useState, useEffect } from "react";
import DefaultTemplate from "../../templates/default";
import { GET_TOPICS } from "../../lib/api";
import TopicBlockList from "../../components/TopicBlockList";

export default function Topics() {
  const [ loading, setLoading ] = useState(true);
  const [ topics, setTopics ] = useState();

  const _getTopics = async () => {
    const result = await GET_TOPICS();
    setTopics(result.page.edges);
    setLoading(false);
  }

  useEffect(() => {
    _getTopics();
  }, [])

  if(loading) {
    return <DefaultTemplate>
      Loading...
    </DefaultTemplate>
  }

  return <DefaultTemplate>
    {
      (topics.length > 0) &&
      <TopicBlockList topics={ topics } />
    }
  </DefaultTemplate>
}