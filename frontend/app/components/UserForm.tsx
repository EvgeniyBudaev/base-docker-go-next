"use client";

import type {FC} from "react";
import { useFormState } from "react-dom";
import {addUserAction} from "@/app/actions/userActions";

const INITIAL_FORM_STATE = {
  data: undefined,
  error: undefined,
  errors: undefined,
  success: false,
};

export const UserForm: FC = () => {
  const [state, formAction] = useFormState(
    addUserAction,
    INITIAL_FORM_STATE,
  );

  return (
    <form action={formAction}>
      <button type="submit">Get data</button>
    </form>
  )
}