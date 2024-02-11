import style from './style.module.css'
const Background = ({ numSections }: { numSections: number }) => {
  const sections = []
  for (let i = 0; i < numSections; i++) {
    sections.push(<span key={i}></span>)
  }

  return <div className={style.background}>{sections}</div>
}
export default Background
