import { QuitIconWithPopper } from "../UI/icons/QuitIconWithPopper"
import { NavLink } from "react-router-dom"

export default function QuitGame() {

  const quitGameHandler () => {

  }

  return (
    <div
      onClick={quitGameHandler}
    >
      <NavLink to="/">
        <QuitIconWithPopper />
      </NavLink>
    </div>
  )
}
