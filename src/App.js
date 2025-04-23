import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Star } from "lucide-react";
import { Progress } from "./components/ui/progress";
export default function RewardTodoApp() {
    const [tasks, setTasks] = useState([]);
    const [taskText, setTaskText] = useState("");
    const [rewardText, setRewardText] = useState("");
    const [stars, setStars] = useState(1);
    const handleAddTask = () => {
        if (!taskText)
            return;
        setTasks([
            ...tasks,
            { text: taskText, reward: rewardText, stars, completed: false },
        ]);
        setTaskText("");
        setRewardText("");
        setStars(1);
    };
    const toggleComplete = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };
    const progress = tasks.length === 0
        ? 0
        : (tasks.filter((t) => t.completed).length / tasks.length) * 100;
    return (_jsxs("div", { className: "max-w-xl mx-auto p-6 space-y-6 bg-gray-50 rounded-lg shadow-lg", children: [_jsx("h1", { className: "text-3xl font-bold text-center text-blue-600", children: "\uD83C\uDFAF Tagesziele mit Belohnung" }), _jsxs("div", { className: "flex flex-col gap-4 sm:flex-row", children: [_jsx(Input, { placeholder: "Aufgabe eingeben", value: taskText, onChange: (e) => setTaskText(e.target.value), className: "flex-1" }), _jsx(Input, { placeholder: "Belohnung", value: rewardText, onChange: (e) => setRewardText(e.target.value), className: "flex-1" }), _jsx(Input, { type: "number", min: 1, max: 3, value: stars, onChange: (e) => setStars(Number(e.target.value)), className: "w-20 text-center" }), _jsx(Button, { onClick: handleAddTask, className: "bg-blue-600 text-white", children: "\u2795 Hinzuf\u00FCgen" })] }), _jsxs("div", { className: "space-y-2", children: [_jsx(Progress, { value: progress, className: "h-4 rounded-full bg-gray-200" }), _jsxs("p", { className: "text-sm text-center text-gray-600", children: ["Fortschritt: ", _jsxs("span", { className: "font-bold", children: [Math.round(progress), "%"] })] })] }), _jsx("div", { className: "space-y-4", children: tasks.map((task, index) => (_jsx(Card, { className: `cursor-pointer transition-transform transform ${task.completed ? "scale-95" : "hover:scale-105"}`, completed: task.completed, onClick: () => toggleComplete(index), children: _jsxs(CardContent, { className: "p-4 space-y-2", children: [_jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: `text-lg font-medium ${task.completed ? "line-through text-gray-500" : ""}`, children: task.text }), _jsx("div", { className: "flex items-center gap-1", children: Array(task.stars)
                                            .fill(0)
                                            .map((_, i) => (_jsx(Star, { size: 20, className: "text-yellow-500" }, i))) })] }), _jsxs("p", { className: "text-sm text-gray-600", children: ["\uD83C\uDF81 Belohnung: ", task.reward || "Keine"] })] }) }, index))) })] }));
}
