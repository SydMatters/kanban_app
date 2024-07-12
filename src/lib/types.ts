export interface User {
  user_id:number,
  user_name: string,
  email: string,
}

export interface Section {
  section_id: number,
  section_name: string,
  column_ids: number[],
  email: string,
  title: string
}

export interface Task {
  task_id: number;
  task_name: string;
  section_id: number;
  email: string,

}
