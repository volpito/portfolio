import { useDispatch } from 'react-redux'
import "./style.css"

function BtnLang () {
  const dispach = useDispatch()
  return (
    <div>
    <div className="btnLang text-2xl">
      <button className="btnFr" onClick={(() => dispach({type: "fr"}))}>🇫🇷</button>
      <br />
      <button className="btnEn" onClick={(() => dispach({type: "en"}))}>🇬🇧</button>
    </div>
    </div>
  )
}

export default BtnLang;