import {revalidatePath} from "next/cache";
import {UserDetail} from "@/app/components/UserDetail";

async function loader() {
    console.log("user page.tsx");
    try {
        const contentType: { "Content-Type"?: string } = {
            "Content-Type": "application/json",
        };
        const requestOptions = {
            method: 'GET',
            headers: {
                ...contentType,
            },
        };
        const url = `http://158.160.90.159:80/api/v1/user`;
        const response = await fetch(url, requestOptions);

        // Проверяем статус ответа
        if (!response.ok) {
            return {
                data: undefined,
                error: undefined,
                errors: undefined,
                success: false,
            };
        }
        console.log("user page.tsx response: ", response.ok);
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