import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonForm } from "../form/ButtonForm";
import { InputValue } from "../form/InputValue";
import { addTaskSchema, taskSchemaProps } from "../../schema/taskSchema";
import { useContext } from "react";
import { AppContext } from "../../context/AppContext";

export const AddTask = () => {
  const { tasks, setTasks } = useContext(AppContext);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: { display: false, task: "" },
    resolver: yupResolver(addTaskSchema),
  });

  const submitForm = async (data: taskSchemaProps) => {
    const newArray = [...tasks];
    newArray.push(data);
    setTasks(newArray);
    //cleaning input
    setValue("task", "");
  };

  return (
    <form
      className="w-full border p-4 rounded-lg flex"
      onSubmit={handleSubmit(submitForm)}
    >
      <Controller
        name="task"
        control={control}
        render={({ field }) => (
          <InputValue
            style="classic"
            type="text"
            placeholder="Add your task here"
            field={field}
            errors={errors?.task}
          />
        )}
      />

      <ButtonForm style="classic" type="submit" value="+" />
    </form>
  );
};
