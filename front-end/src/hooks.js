import { useForm as useReactHookForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:3001";

export function useApi() {
  return {
    post: function (url, body) {
      console.log(`Submitting to ${url}`, body);
      return fetch(API_BASE_URL + url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    },
  };
}

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
