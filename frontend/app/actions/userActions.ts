'use server'

import {revalidatePath} from "next/cache";

export async function addUserAction(prevState: any, formData: FormData) {
  try {
    const body = JSON.stringify(Object.fromEntries(formData));
    let contentType: { "Content-Type"?: string } = {
      "Content-Type": "application/json",
    };
    const requestOptions = {
      method: 'POST',
      headers: {
        ...contentType,
      },
      body: body,
    };
    console.log("addUserAction.ts");
    const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user/add`;
    const response = await fetch(url, requestOptions);

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