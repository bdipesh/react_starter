export enum TaskStatus {
  'Urgent',
  'Important',
  'Normal',
}
export type Task = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
  status: TaskStatus;
};
export interface TaskState {}
