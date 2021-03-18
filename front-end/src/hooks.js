import { useForm as useReactHookForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export function useForm() {
  const history = useHistory();
  const { register, handleSubmit, errors } = useReactHookForm();
  return {
    register,
    handleSubmit: function (onSubmit) {
      return handleSubmit(async (data) => {
        await onSubmit(data);
        history.push("/submit");
      });
    },
    errors,
  };
}
