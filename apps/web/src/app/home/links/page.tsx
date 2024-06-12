"use client"
import { useState } from "react"

import { AspectRatio } from "@/components/ui/aspect-ratio"
import LinkComponent from "./components/link"
import Icon from "./components/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import AddLink from "./components/addLink"
import { Reorder, useDragControls } from "framer-motion"
export default function Home() {
  const controls = useDragControls()
  const avatar = {
    link: "https://github.com/shadcn.png",
    text: "CN"
  }

  const links = [
    { index: 1, name: "Facebook", url: "https://facebook.com" },
    { index: 2, name: "Twitter", url: "https://twitter.com" },
    { index: 3, name: "Instagram", url: "https://instagram.com" },
    { index: 4, name: "LinkedIn", url: "https://linkedin.com" },
  ]
  const [items, setItems] = useState(links)
  return (
    <main className='w-screen justify-center flex items-center h-screen'>
      <div className="md:w-1/2 w-full h-full p-10">
        <AspectRatio ratio={9 / 16}>
          <div className=" bg-green-600 rounded-lg h-full">
            <ScrollArea className="h-full w-full rounded-md border p-4">
              <div className="head w-full justify-center flex overflow-hidden h-full">
                <div className="icon">
                  <Icon children={avatar} />
                </div>
                <div className="text-2xl">
                  {/* <p>Personal Links</p> */}
                </div>
                <div className="bt">
                  <AddLink />
                </div>
              </div>
              <Reorder.Group values={items} onReorder={setItems}>
                {links.map((link, index) => (
                  <Reorder.Item value={link} key={index}
                    dragListener={false} dragControls={controls}
                  >
                    <LinkComponent key={index} children={link} />
                  </Reorder.Item>

                ))}
              </Reorder.Group>
            </ScrollArea>
          </div>


        </AspectRatio>

      </div>
    </main>
  )
}