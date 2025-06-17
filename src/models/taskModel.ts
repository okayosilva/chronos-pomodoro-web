import type { TaskStateModel } from "./taskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: Date;
  completeDate: number | null; // -> quando o timer chega ao final
  interruptDate: number | null; // -> quando o timer é interrompido
  type: keyof TaskStateModel['config'];
};
