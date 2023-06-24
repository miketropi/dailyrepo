import FancyboxWrap from "./FancyboxWrap";

export default function Gallery({ heading, description, gallery }) {
  return <div className="gallery-block">
    <h4>{ heading }</h4>
    <p dangerouslySetInnerHTML={{__html: description}}></p>
    {
      gallery.length > 0 && 
      <FancyboxWrap>
        <div className="gallery-block__images">
          {
            gallery.map(i => {
              return <a data-fancybox="gallery" href={ i.documentInStages[0].url } key={ i.id }>
                <img src={ i.url } alt={ i.fileName } />
              </a>
            })
          }
        </div>
      </FancyboxWrap>
    }
  </div>
}