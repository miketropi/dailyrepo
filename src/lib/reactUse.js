import { useEffect, useRef } from "react"

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - The Daily Repo`;
  }, [title]);
  return null;
}