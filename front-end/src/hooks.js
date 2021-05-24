import { useForm as useReactHookForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export function useForm() {
  const history = useHistory();
  const { register, handleSubmit, errors, getValues, setValue } = useReactHookForm();

  return {
    register,
    handleSubmit: function (onSubmit) {
      return handleSubmit(async (data) => {
        try {
          history.push("/submitting");
          await onSubmit(data);
          history.push("/submit");
        } catch (error) {
          console.error(error);
          history.push("/error");
        }
      });
    },
    errors,
    getValues,
    setValue,
  };
}
