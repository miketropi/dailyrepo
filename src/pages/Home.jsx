import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DefaultTemplate from "../templates/default";
import Welcome from "../components/Welcome";
import WidgetTopics from "../components/WidgetTopics";
import Posts from "../components/Posts";
import Pagination from "../components/Pagination";
import { GET_TOPICS, GET_POSTS } from "../lib/api" 

const POST_PER_PAGE = parseInt(import.meta.env.VITE_POST_PER_PAGE); 

export default function () {
  let { paged } = useParams();

  const [topics, setTopics] = useState();
  const [posts, setPosts] = useState();
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage] = useState( paged ?? 1 );

  const _getPosts = async () => {
    const result = await GET_POSTS(currentPage);
    setPosts(result);
    setTotalPage(Math.ceil(result?.page?.aggregate?.count / POST_PER_PAGE));
  }

  useEffect( () => {
    _getPosts();
  }, [currentPage])

  useEffect(() => {
    const _getTopics = async () => {
      const result = await GET_TOPICS();
      setTopics(result)
    }

    _getPosts();
    _getTopics();
  }, [])

  return <DefaultTemplate>
    <Welcome 
      heading="/* { Daily Repo }" 
      desc="A small personal project to keep the daily events around me." />

    <div className="container-2-cols">
      <div className="site-bar">
        <div className="site-bar__inner __sticky">
          <WidgetTopics topics={ topics } title="Topics" />
        </div>
      </div>
      <div className="content">
        <Posts posts={ posts } />
        <Pagination numPage={ totalPage } currentPage={ currentPage } />
      </div>
    </div>
  </DefaultTemplate>
}