'use server'

import {revalidatePath} from "next/cache";

export async function addUserAction(prevState: any, formData: FormData) {
  try {
    const requestOptions = {
      method: 'POST',
      body: formData,
    };
    const response = await fetch('http://127.0.0.1:8080/api/v1/user/add', requestOptions);

    // Проверяем статус ответа
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log("response: ", response);
    revalidatePath("/");
    return {
      data: "ok",
      error: undefined,
      errors: undefined,
      success: true,
    };
  } catch (error) {
    return {
      data: undefined,
      error: undefined,
      errors: undefined,
      success: false,
    };
  }
}