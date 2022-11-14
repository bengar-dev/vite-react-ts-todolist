import * as yup from "yup";

export interface taskSchemaProps {
  display: boolean;
  task: string;
}

export const addTaskSchema = yup.object({
  display: yup.boolean().required(),
  task: yup
    .string()
    .min(2, "Two characters minimum")
    .required("Task is mandatory"),
});
