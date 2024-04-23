import {revalidatePath} from "next/cache";
import {UserDetail} from "@/app/components/UserDetail";

async function loader() {
    console.log("user page.tsx");
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
        // const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/user`;
        console.log("process.env.NEXT_PUBLIC_API_URL: ", process.env?.NEXT_PUBLIC_API_URL);
        const apiUrl = `${process.env?.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"}/api/v1/user`;
        const url = `http://127.0.0.1:8000/api/v1/user`;
        console.log("user page.tsx url: ", url);
        const response = await fetch(url, requestOptions);

        // Проверяем статус ответа
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        console.log("user page.tsx response: ", response);
        revalidatePath("/user");
        return {
            data: "ok",
            error: undefined,
            errors: undefined,
            success: true,
        };
    } catch (error) {
        console.log("user page.tsx error: ", error);
        return {
            data: undefined,
            error: undefined,
            errors: undefined,
            success: false,
        };
    }
}

type TProps = {
    params: {};
};

export default async function UserDetailRoute(props: TProps) {
    const data = await loader();

    return <UserDetail data={data} />
}