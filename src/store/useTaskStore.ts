import { create } from 'zustand'
import { fetchClient } from '../services/fetchClient'

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
}));