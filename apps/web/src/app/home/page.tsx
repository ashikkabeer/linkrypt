"use client";
import { Tabs } from "@/components/ui/animated-tab"
import { SortableList } from "./components/sortable-list"
import { useCallback } from "react"
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { Plus, RepeatIcon, Settings2Icon, XIcon } from "lucide-react"
const TabLinks = [
  { title: 'Work', value: 'tab1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni iste sit ab eaque velit odit, est, exercitationem impedit expedita ipsum sint dolorem nulla neque soluta suscipit pariatur cum voluptates porro cumque.' },
  { title: 'Personal', value: 'tab2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni iste sit ab eaque velit odit, est, exercitationem impedit expedita ipsum sint dolorem nulla neque soluta suscipit pariatur cum voluptates porro cumque' },
  { title: 'Project', value: 'tab3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni iste sit ab eaque velit odit, est, exercitationem impedit expedita ipsum sint dolorem nulla neque soluta suscipit pariatur cum voluptates porro cumque' },
  { title: 'College', value: 'tab4', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni iste sit ab eaque velit odit, est, exercitationem impedit expedita ipsum sint dolorem nulla neque soluta suscipit pariatur cum voluptates porro cumque' },
  { title: 'Resources', value: 'tab5', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni iste sit ab eaque velit odit, est, exercitationem impedit expedita ipsum sint dolorem nulla neque soluta suscipit pariatur cum voluptates porro cumque' },
]

import List from "./components/list";
const initialState = [
  { text: "Item 1", checked: false, id: 1, description: "Description 1" },
  { text: "Item 2", checked: false, id: 2, description: "Description 2" },
  { text: "Item 3", checked: false, id: 3, description: "Description 3" },
  { text: "Item 4", checked: false, id: 4, description: "Description 4" },
  { text: "Item 5", checked: false, id: 5, description: "Description 5" },
  { text: "Item 6", checked: false, id: 6, description: "Description 6" },
  { text: "Item 7", checked: false, id: 7, description: "Description 7" },
  { text: "Item 8", checked: false, id: 8, description: "Description 8" },
  { text: "Item 9", checked: false, id: 9, description: "Description 9" },
  { text: "Item 10", checked: false, id: 10, description: "Description 10" },
]
export default function Workspace() {

  return (
    <main className="w-screen pt-32  flex justify-center items-center">
      <div>
        <Tabs tabs={TabLinks} />
      </div>
    </main>
  )
}