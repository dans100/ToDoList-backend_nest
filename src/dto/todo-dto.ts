export class TodoDto {
  id?: string;
  description: string;
  user_id: string;
  isCompleted: number;
  deadline: Date | null;
}
