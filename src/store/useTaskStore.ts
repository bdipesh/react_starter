import { create } from 'zustand'

interface Task {
  id: number
  title: string
  description?: string
  completed: boolean
}

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  addTask: (title: string) => void;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [],
  loading: false,
  error: null,
  addTask: (title: string) => {
    const newTask: Task = {
      id: Date.now(),
      title,
      completed: false,
    };
    set((state) => ({ tasks: [...state.tasks, newTask] }));
  },
  toggleTask: (id: number) => {
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      ),
    }));
  },
  removeTask: (id: number) => {
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  },
}));
