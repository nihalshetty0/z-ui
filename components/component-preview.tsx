import * as React from "react"
import { componentExample } from "@/content/docs/component-example"

import { cn } from "@/lib/utils"

interface ComponentPreviewProps {
  name: string
  description?: string
  className?: string
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({
  name,
  className,
}) => {
  const Preview = React.useMemo(() => {
    const Component = componentExample.default[name]?.component

    if (!Component) {
      return (
        <p className="text-muted-foreground text-sm">
          Component {name} not found in registry.
        </p>
      )
    }

    return <Component />
  }, [name])

  return (
    <div
      className={cn(
        "mt-2 flex min-h-[350px] w-full items-center justify-center bg-background p-6 md:p-10",
        className
      )}
    >
      <React.Suspense fallback={<div>Loading...</div>}>
        {Preview}
      </React.Suspense>
    </div>
  )
}

export default ComponentPreview
