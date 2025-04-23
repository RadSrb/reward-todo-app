import * as React from "react"


function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-input/70 dark:bg-input dark:focus-visible:ring-offset-background ${className}`}
      {...(type === "number" ? { min: 1, max: 3 } : {}
      )}
      {...props}
    />
  )
}

export { Input }
