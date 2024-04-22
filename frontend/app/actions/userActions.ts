'use server'

import {revalidatePath} from "next/cache";

export async function addUserAction(prevState: any, formData: FormData) {
  try {
    let contentType: { "Content-Type"?: string } = {
      "Content-Type": "application/json",
    };
    const requestOptions = {
      method: 'GET',
      headers: {
        ...contentType,
      },
    };
    console.log("addUserAction.ts");
    //const response = await fetch('http://127.0.0.1:8080/api/v1/user/add', requestOptions);
    const response = await fetch('http://backend:8080/api/v1/user/add', requestOptions);

    // Проверяем статус ответа
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    console.log("addUserAction.ts response: ", response);
    revalidatePath("/");
    return {
      data: "ok",
      error: undefined,
      errors: undefined,
      success: true,
    };
  } catch (error) {
    console.log("addUserAction.ts error ", error);
    return {
      data: undefined,
      error: undefined,
      errors: undefined,
      success: false,
    };
  }
}