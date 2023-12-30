import './Button.css'

interface BtnProps {
    children: string;
}

export default function Button({children}:BtnProps): JSX.Element {
  return (
    <button>{children}</button>
  )
}
