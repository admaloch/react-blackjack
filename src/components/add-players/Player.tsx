
interface PlayerProps {
    name: string;
}

export default function Player({name}: PlayerProps) {
  return (
    <li>{name}</li>
  )
}
