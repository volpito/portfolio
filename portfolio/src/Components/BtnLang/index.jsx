import { useDispatch } from 'react-redux'
import "./style.css"

function BtnLang () {
  const dispach = useDispatch()
  return (
    <div>
    <div className="btnLang text-2xl">
      <button className="btnFr hover:shadow-2xl" onClick={(() => dispach({type: "fr"}))}>🇫🇷</button>
      <br />
      <button className="btnEn hover:shadow-2xl" onClick={(() => dispach({type: "en"}))}>🇬🇧</button>
    </div>
    </div>
  )
}

export default BtnLang;