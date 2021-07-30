import { useDispatch } from 'react-redux'
import "./style.css"

function BtnLang () {
  const dispach = useDispatch()
  return (
    <div>
    <div className="btnLang">
      <button className="btnFr" onClick={(() => dispach({type: "fr"}))}>🇫🇷</button>
      <button className="btnEn" onClick={(() => dispach({type: "en"}))}>🇬🇧</button>
    </div>
    </div>
  )
}

export default BtnLang;