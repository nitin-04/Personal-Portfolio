import {personalInfo} from "../data"

const info = () => {
  return (
    <>
      {personalInfo.map(({title, descriptiom}, index) =>{
        return (
          <li className="info__item" key={index}>
            <span className="info__title">{title}</span>
            <span className="info__description">{descriptiom}</span>
          </li>
        )
      })}
    </>
  )
}

export default info
