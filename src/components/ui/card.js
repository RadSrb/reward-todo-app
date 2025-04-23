import { jsx as _jsx } from "react/jsx-runtime";
import * as clsx from "clsx";
import "./card.css"; // Importiere eine CSS-Datei für das Styling
function Card({ className, children, completed = false, ...props }) {
    return (_jsx("div", { className: clsx("card", className, { "card-completed": completed }), "data-slot": "card", ...props, children: children }));
}
function CardHeader({ className, children, ...props }) {
    return (_jsx("div", { className: clsx("card-header", className), "data-slot": "card-header", ...props, children: children }));
}
function CardTitle({ className, children, ...props }) {
    return (_jsx("h2", { className: clsx("card-title", className), "data-slot": "card-title", ...props, children: children }));
}
function CardDescription({ className, children, ...props }) {
    return (_jsx("p", { className: clsx("card-description", className), "data-slot": "card-description", ...props, children: children }));
}
function CardAction({ className, children, ...props }) {
    return (_jsx("div", { className: clsx("card-action", className), "data-slot": "card-action", ...props, children: children }));
}
function CardContent({ className, children, ...props }) {
    return (_jsx("div", { className: clsx("card-content", className), "data-slot": "card-content", ...props, children: children }));
}
function CardFooter({ className, children, ...props }) {
    return (_jsx("div", { className: clsx("card-footer", className), "data-slot": "card-footer", ...props, children: children }));
}
export { Card, CardHeader, CardFooter, CardTitle, CardAction, CardDescription, CardContent, };
