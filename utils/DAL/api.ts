import { checkAnswer } from "../checkAnswer";
import { handleAnswer } from "../handleAnswer";

export interface Option {
    id: string;
    text: string;
}

export interface Task {
    id: string;
    instruction: string;
    options: Option[];
}

export interface WorksheetTasksData {
    tasks: Task[];
}

export const API = {
    getWorksheetTasks: async (): Promise<WorksheetTasksData> => {
        return await import('../mockData/mockData.json') as WorksheetTasksData
    },
    checkAnswer: async (taskId: string, optionId: string): Promise<boolean> => {
        handleAnswer(taskId, optionId);
        return await checkAnswer(taskId, optionId);

    }
}