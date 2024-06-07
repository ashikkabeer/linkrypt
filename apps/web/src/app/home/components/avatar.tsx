import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface IconProps {
  children: {
    link: string
    text: string
  }
}
export default function Icon({ children }: IconProps) {
  return (
    <Avatar>
      <AvatarImage src={children.link} />
      <AvatarFallback>{children.text}</AvatarFallback>
    </Avatar>
  )
}