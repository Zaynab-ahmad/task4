import './SectionTit.css'
interface sectionTitProp {
    tit: string,
    text: string
}
export default function SectionTit({ tit, text }: sectionTitProp) {
  return (
    <div className="SectionTit">
      <h3>{tit}</h3>
      <p>{text}</p>
    </div>
  );
}
