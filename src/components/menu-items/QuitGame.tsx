import { QuitIconWithPopper } from "../UI/icons/QuitIconWithPopper"
import { NavLink } from "react-router-dom"

export default function QuitGame() {


  return (
    <div>
      <NavLink to="/">
        <QuitIconWithPopper />
      </NavLink>
    </div>
  )
}
