import * as yup from "yup";

export interface taskSchemaProps {
  display: boolean;
  task: string;
}

export const addTaskSchema = yup.object({
  task: yup
    .string()
    .min(2, "Two characters minimum")
    .required("Task is mandatory"),
  display: yup.boolean().default(false).required(),
});
