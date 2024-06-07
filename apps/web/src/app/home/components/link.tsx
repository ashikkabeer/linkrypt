import Link from "next/link"
import { ExternalLink } from 'lucide-react';
interface LinkProps {
  children: {
    name: string
    url: string
  }
}


export default function LinkComponent({ children }: LinkProps) {
  return (
    <div className="body mt-5 bg-white m-5 rounded-full">
      <div className="flex justify-center items-center h-14 w-full align-middle">
        <div className="flex px-5 justify-between w-full">
          <p></p>
          <Link href={children.url}>
            {children.name}
          </Link>
          <ExternalLink />
        </div>
      </div>
    </div>
  )
}