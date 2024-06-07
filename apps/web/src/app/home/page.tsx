import { AspectRatio } from "@/components/ui/aspect-ratio"
import LinkComponent from "./components/link"
import Icon from "./components/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import AddLink from "./components/addLink"

export default function Home() {
  const avatar = {
    link: "https://github.com/shadcn.png",
    text: "CN"
  }

  const links = [
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Instagram", url: "https://instagram.com" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "GitHub", url: "https://github.com" },
    { name: "GitLab", url: "https://gitlab.com" },
    { name: "Bitbucket", url: "https://bitbucket.com" },
    { name: "StackOverflow", url: "https://stackoverflow.com" },
    { name: "Reddit", url: "https://reddit.com" },
    { name: "HackerNews", url: "https://news.ycombinator.com" },
    { name: "Medium", url: "https://medium.com" },
    { name: "Dev.to", url: "https://dev.to" },
    { name: "CodePen", url: "https://codepen.io" },
    { name: "JSFiddle", url: "https://jsfiddle.net" },
    { name: "Glitch", url: "https://glitch.com" },
    { name: "Repl.it", url: "https://repl.it" },
    { name: "CodeSandbox", url: "https://codesandbox.io" },
    { name: "JSBin", url: "https://jsbin.com" },
    { name: "Plunker", url: "https://plnkr.co" },
    { name: "Unpkg", url: "https://unpkg.com" },
    { name: "JSDelivr", url: "https://www.jsdelivr.com" },
    { name: "CDNJS", url: "https://cdnjs.com" },
    { name: "WebComponents", url: "https://www.webcomponents.org" },
    { name: "MDN Web Docs", url: "https://developer.mozilla.org" },
    { name: "W3Schools", url: "https://www.w3schools.com" },
    { name: "Can I Use", url: "https://caniuse.com" },
    { name: "CSS-Tricks", url: "https://css-tricks.com" },
    { name: "Smashing Magazine", url: "https://www.smashingmagazine.com" },
  ]
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
              {links.map((link, index) => (
                <LinkComponent key={index} children={link} />
              ))}
            </ScrollArea>
          </div>


        </AspectRatio>
      </div>
    </main>
  )
}