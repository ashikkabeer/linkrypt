"use client"

import { useCallback, useState } from "react"
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { Plus, RepeatIcon, Settings2Icon, XIcon } from "lucide-react"
import { toast } from "sonner"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { DirectionAwareTabs } from "./ui/direction-aware-tabs"

import SortableList, {Item,SortableListItem} from "./sortable-list"

const initialState = [
  {
    text: "Plan Venue",
    checked: false,
    id: 1,
    description:
      "Research and select a suitable venue for the event, taking into consideration factors such as capacity, location, amenities, and cost.",
  },
  {
    text: "Plan Venue",
    checked: false,
    id: 10,
    description:
      "Research and select a suitable venue for the event, taking into consideration factors such as capacity, location, amenities, and cost.",
  },
  {
    text: "Plan Venue",
    checked: false,
    id: 12,
    description:
      "Research and select a suitable venue for the event, taking into consideration factors such as capacity, location, amenities, and cost.",
  },
  {
    text: "Plan Venue",
    checked: false,
    id: 31,
    description:
      "Research and select a suitable venue for the event, taking into consideration factors such as capacity, location, amenities, and cost.",
  },
  {
    text: "Plan Venue",
    checked: false,
    id: 41,
    description:
      "Research and select a suitable venue for the event, taking into consideration factors such as capacity, location, amenities, and cost.",
  },
  {
    text: "Invite Speakers",
    checked: false,
    id: 22,
    description:
      "Identify and invite relevant speakers or presenters for the event, ensuring they align with the event theme and target audience.",
  },
  {
    text: "Organize Logistics",
    checked: false,
    id: 3,
    description:
      "Coordinate and manage logistics for the event, including transportation, accommodation, equipment, and supplies.",
  },
  {
    text: "Promote Event",
    checked: false,
    id: 4,
    description:
      "Develop and implement a marketing strategy to promote the event, utilizing various channels such as social media, email marketing, and online advertising.",
  },
  {
    text: "Manage Registrations",
    checked: false,
    id: 5,
    description:
      "Set up a registration system to track and manage attendee registrations, including ticket sales, attendee information, and communication.",
  },
];
function List() {
  const [items, setItems] = useState<Item[]>(initialState)
  const [openItemId, setOpenItemId] = useState<number | null>(null)
  const [tabChangeRerender, setTabChangeRerender] = useState<number>(1)
  const [topP, setTopP] = useState([10])
  const [temp, setTemp] = useState([10])
  const [tokens, setTokens] = useState([10])

  const handleCompleteItem = (id: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    )
  }

  const handleAddItem = () => {

    setItems((prevItems) => [
      ...prevItems,
      {
        text: `Item ${prevItems.length + 1}`,
        checked: false,
        id: Date.now(),
        description: "",
      },
    ])
  }

  const handleResetItems = () => {
    setItems(initialState)
  }

  const handleCloseOnDrag = useCallback(() => {
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.checked ? { ...item, checked: false } : item
      )
      return updatedItems.some(
        (item, index) => item.checked !== prevItems[index].checked
      )
        ? updatedItems
        : prevItems
    })
  }, [])

  const renderListItem = (
    item: Item,
    order: number,
    onCompleteItem: (id: number) => void,
    onRemoveItem: (id: number) => void
  ) => {
    const isOpen = item.id === openItemId

    const tabs = [
      {
        id: 0,
        label: "Title",
        content: (
          <div className="flex w-full flex-col pr-2 py-2">
            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.75,
                delay: 0.15,
              }}
            >
              <label className="text-xs font-medium text-black">
                Edit Title{" "}
              </label>
              <motion.input
                type="text"
                value={item.text}
                className=" w-full rounded-lg border font-semibold border-black/100 bg-transparent px-1 py-[6px] md:text-3xl text-black placeholder:text-black/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#13EEE3]/80 dark:border-white/10"
                onChange={(e) => {
                  const text = e.target.value
                  setItems((prevItems) =>
                    prevItems.map((i) =>
                      i.id === item.id ? { ...i, text } : i
                    )
                  )
                }}
              />
              
            </motion.div>
          </div>
        ),
      },
      {
        id: 1,
        label: "Access",
        content: (
          <div className="flex flex-col  pr-2 ">
            <motion.div
              initial={{ opacity: 0, filter: "blur(4px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                type: "spring",
                bounce: 0.2,
                duration: 0.75,
                delay: 0.15,
              }}
            >
              <label className="text-xs text-neutral-400" htmlFor="prompt">
                Authorized people{" "}
                <span className="lowercase">
                  who can see the links {item.text.slice(0, 20)}
                </span>
              </label>
              <textarea
                id="prompt"
                className="h-[100px] w-full resize-none rounded-[6px]  bg-transparent  px-2 py-[2px] text-sm text-black border-black border-2 pt-2 placeholder:text-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#13EEE3]/80"
                value={item.description}
                placeholder="update agent prompt"
                onChange={(e) => {
                  const description = e.target.value
                  setItems((prevItems) =>
                    prevItems.map((i) =>
                      i.id === item.id ? { ...i, description } : i
                    )
                  )
                }}
              />
            </motion.div>
          </div>
        ),
      },
      
    ]

    return (
      <SortableListItem
        item={item}
        order={order}
        key={item.id}
        isExpanded={isOpen}
        onCompleteItem={onCompleteItem}
        onRemoveItem={onRemoveItem}
        handleDrag={handleCloseOnDrag}
        className="my-2 "
        renderExtra={(item:any) => (
          <div
            key={`${isOpen}`}
            className={cn(
              "flex h-full w-full flex-col items-center justify-center gap-2 ",
              isOpen ? "py-1 px-1" : "py-3 "
            )}
          >
            <motion.button
              layout
              onClick={() => setOpenItemId(!isOpen ? item.id : null)}
              key="collapse"
              className={cn(
                isOpen
                  ? "absolute right-3 top-3 z-10 "
                  : "relative z-10 ml-auto mr-3 "
              )}
            >
              {isOpen ? (
                <motion.span
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    type: "spring",
                    duration: 1.95,
                  }}
                >
                  <XIcon className="h-5 w-5 text-neutral-500" />
                </motion.span>
              ) : (
                <motion.span
                  initial={{ opacity: 0, filter: "blur(4px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    type: "spring",
                    duration: 0.95,
                  }}
                >
                  <Settings2Icon className="stroke-1 h-5 w-5 text-black  hover:stroke-[#13EEE3]/70 " />
                </motion.span>
              )}
            </motion.button>

            <LayoutGroup id={`${item.id}`}>
              <AnimatePresence mode="popLayout">
                {isOpen ? (
                  <motion.div className="flex w-full flex-col ">
                    <div className=" w-full  ">
                      <motion.div
                        initial={{
                          y: 0,
                          opacity: 0,
                          filter: "blur(4px)",
                        }}
                        animate={{
                          y: 0,
                          opacity: 1,
                          filter: "blur(0px)",
                        }}
                        transition={{
                          type: "spring",
                          duration: 0.15,
                        }}
                        layout
                        className="  w-full"
                      >
                        <DirectionAwareTabs
                          className="mr-auto bg-transparent pr-2"
                          rounded="rounded "
                          tabs={tabs}
                          onChange={() =>
                            setTabChangeRerender(tabChangeRerender + 1)
                          }
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      key={`re-render-${tabChangeRerender}`} //  re-animates the button section on tab change
                      className="mb-2 flex w-full items-center justify-between pl-2"
                      initial={{ opacity: 0, filter: "blur(4px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      transition={{
                        type: "spring",
                        bounce: 0,
                        duration: 0.55,
                      }}
                    >
                      <motion.div className="flex items-center gap-2 pt-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-[#13EEE3]" />
                        <span className="text-xs text-neutral-300/80">
                          Changes
                        </span>
                      </motion.div>
                      <motion.div layout className="ml-auto mr-1  pt-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => {
                            setOpenItemId(null)
                            toast.info("Changes saved")
                          }}
                          className="h-7 rounded-lg bg-[#13EEE3]/80 hover:bg-[#13EEE3] hover:text-black text-black"
                        >
                          Apply Changes
                        </Button>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </LayoutGroup>
          </div>
        )}
      />
    )
  }

  return (
    <div className="md:px-4 w-full max-w-xl ">
      <div className="mb-9 rounded w-full p-2 shadow-sm md:p-6">
        <div className=" overflow-auto p-1  md:p-4">
          <div className="flex flex-col space-y-2">
           
            <div className="flex items-center justify-between gap-4 py-2">
              <button disabled={items?.length > 5} onClick={handleAddItem}>
                <Plus className="dark:text-netural-100 h-5 w-5 text-neutral-500/80 hover:text-white/80" />
              </button>
              <div data-tip="Reset task list">
                <button onClick={handleResetItems}>
                  <RepeatIcon className="dark:text-netural-100 h-4 w-4 text-neutral-500/80 hover:text-white/80" />
                </button>
              </div>
            </div>
            <SortableList
              items={items}
              setItems={setItems}
              onCompleteItem={handleCompleteItem}
              renderItem={renderListItem}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default List
