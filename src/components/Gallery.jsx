export default function Gallery({ heading, desction, gallery }) {
  return <>
    <h4>{ heading }</h4>
    <p>{ desction }</p>
    { JSON.stringify(gallery) }
  </>
}