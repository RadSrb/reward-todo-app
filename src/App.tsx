import { useState } from "react";
import { Card, CardContent } from "./components/ui/card.js";
import { Button } from "./components/ui/button.js";
import { Input } from "./components/ui/input.js";
import { Star } from "lucide-react";
import { Progress } from "./components/ui/progress.js";

interface Task {
  text: string;
  reward: string;
  stars: number;
  completed: boolean;
}

export default function RewardTodoApp() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState("");
  const [rewardText, setRewardText] = useState("");
  const [stars, setStars] = useState(1);

  const handleAddTask = () => {
    if (!taskText) return;
    setTasks([
      ...tasks,
      { text: taskText, reward: rewardText, stars, completed: false },
    ]);
    setTaskText("");
    setRewardText("");
    setStars(1);
  };

  const toggleComplete = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const progress =
    tasks.length === 0
      ? 0
      : (tasks.filter((t) => t.completed).length / tasks.length) * 100;

  return (
    <div className="max-w-xl mx-auto p-6 space-y-6 bg-gray-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600">
        🎯 Tagesziele mit Belohnung
      </h1>

      <div className="flex flex-col gap-4 sm:flex-row">
        <Input
          placeholder="Aufgabe eingeben"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="flex-1"
        />
        <Input
          placeholder="Belohnung"
          value={rewardText}
          onChange={(e) => setRewardText(e.target.value)}
          className="flex-1"
        />
        <Input
          type="number"
          min={1}
          max={3}
          value={stars}
          onChange={(e) => setStars(Number(e.target.value))}
          className="w-20 text-center"
        />
        <Button onClick={handleAddTask} className="bg-blue-600 text-white">
          ➕ Hinzufügen
        </Button>
      </div>

      <div className="space-y-2">
        <Progress value={progress} className="h-4 rounded-full bg-gray-200" />
        <p className="text-sm text-center text-gray-600">
          Fortschritt: <span className="font-bold">{Math.round(progress)}%</span>
        </p>
      </div>

      <div className="space-y-4">
        {tasks.map((task, index) => (
          <Card
            key={index}
            className={`cursor-pointer transition-transform transform ${
              task.completed ? "scale-95" : "hover:scale-105"
            }`}
            completed={task.completed}
            onClick={() => toggleComplete(index)}
          >
            <CardContent className="p-4 space-y-2">
              <div className="flex justify-between items-center">
                <span
                  className={`text-lg font-medium ${
                    task.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {task.text}
                </span>
                <div className="flex items-center gap-1">
                  {Array(task.stars)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={20} className="text-yellow-500" />
                    ))}
                </div>
              </div>
              <p className="text-sm text-gray-600">
                🎁 Belohnung: {task.reward || "Keine"}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
