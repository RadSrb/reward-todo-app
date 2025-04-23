import * as React from "react";
import * as clsx from "clsx";
import "./card.css"; // Importiere eine CSS-Datei für das Styling

function Card({
  className,
  children,
  completed = false,
  ...props
}: React.ComponentProps<"div"> & { completed?: boolean }) {
  return (
    <div
      className={clsx("card", className, { "card-completed": completed })}
      data-slot="card"
      {...props}
    >
      {children}
    </div>
  );
}

function CardHeader({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={clsx("card-header", className)}
      data-slot="card-header"
      {...props}
    >
      {children}
    </div>
  );
}

function CardTitle({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <h2
      className={clsx("card-title", className)}
      data-slot="card-title"
      {...props}
    >
      {children}
    </h2>
  );
}

function CardDescription({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <p
      className={clsx("card-description", className)}
      data-slot="card-description"
      {...props}
    >
      {children}
    </p>
  );
}

function CardAction({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={clsx("card-action", className)}
      data-slot="card-action"
      {...props}
    >
      {children}
    </div>
  );
}

function CardContent({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={clsx("card-content", className)}
      data-slot="card-content"
      {...props}
    >
      {children}
    </div>
  );
}

function CardFooter({ className, children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={clsx("card-footer", className)}
      data-slot="card-footer"
      {...props}
    >
      {children}
    </div>
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
