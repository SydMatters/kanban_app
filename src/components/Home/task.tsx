import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Task() {
  return (
    <div className="flex justify-center items-center ">
    <Card className="w-full max-w-sm bg-card p-6 rounded-md hover:shadow-xl hover:outline-1 outline-[#d4d4d4] transition-all cursor-pointer">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Project Proposal</CardTitle>
      </CardHeader>
      <CardContent className="py-4 space-y-2 border-x border-[#d4d4d4]">
        <CardDescription>
          Prepare a detailed project proposal for the client, including scope, timeline, and budget.
        </CardDescription>
        <div className="flex items-center justify-end border-t border-[#d4d4d4] pt-4">
          <div className="flex items-center gap-2">
            <Button variant="outline">Edit</Button>
            <Button variant="outline">Delete</Button>
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
  )
}
