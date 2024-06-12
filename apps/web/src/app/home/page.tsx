import { Tabs } from "@/components/ui/animated-tab"

const TabLinks = [
  { title: 'Work', value: 'tab1', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni iste sit ab eaque velit odit, est, exercitationem impedit expedita ipsum sint dolorem nulla neque soluta suscipit pariatur cum voluptates porro cumque.' },
  { title: 'Personal', value: 'tab2', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni iste sit ab eaque velit odit, est, exercitationem impedit expedita ipsum sint dolorem nulla neque soluta suscipit pariatur cum voluptates porro cumque' },
  { title: 'Project', value: 'tab3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni iste sit ab eaque velit odit, est, exercitationem impedit expedita ipsum sint dolorem nulla neque soluta suscipit pariatur cum voluptates porro cumque' },
  { title: 'College', value: 'tab4', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni iste sit ab eaque velit odit, est, exercitationem impedit expedita ipsum sint dolorem nulla neque soluta suscipit pariatur cum voluptates porro cumque' },
  { title: 'Resources', value: 'tab5', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus magni iste sit ab eaque velit odit, est, exercitationem impedit expedita ipsum sint dolorem nulla neque soluta suscipit pariatur cum voluptates porro cumque' },
]

export default function workspace() {

  return (
    <main className="w-screen pt-32  flex justify-center items-center">
      <div>
        <Tabs tabs={TabLinks} />
      </div>
    </main>
  )
}