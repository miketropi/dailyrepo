import { Link } from "react-router-dom";

export default function Pagination({numPage, currentPage = 1, onClick}) {

  if(numPage <= 1) return;
  return <div className="pagination">
    {
      [...Array(numPage)].map((_, n) => {
        let num  = n + 1;
        if(num == currentPage) return <span 
          className="pagination__item pagination__text pagination__item-current" 
          key={ n }>
          { num }
        </span>

        return <Link 
          className="pagination__item pagination__link" 
          to={ `/${ num }` } 
          key={ n }
          onClick={ e => {
            onClick(num, e);
          } }>
          { num } 
        </Link>
      })
    }
  </div>
}