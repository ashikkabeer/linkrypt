import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import LinkForm from "./linkForm"
export default function AddLink() {

  return (
    <div>
      <Dialog>
        <DialogTrigger>Add Link</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Enter details</DialogTitle>
            <DialogDescription>
                <LinkForm />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

    </div>
  )
}