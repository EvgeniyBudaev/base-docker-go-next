import {revalidatePath} from "next/cache";
import {ProfileDetail} from "@/app/components/ProfileDetail";

export const dynamic = "force-dynamic";

async function loader() {
    console.log("profile page.tsx");
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
        const url = `http://backend:8000/api/v1/user`;
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
        console.log("profile page.tsx response: ", response.ok);
        revalidatePath("/user");
        return {
            data: "ok",
            error: undefined,
            errors: undefined,
            success: true,
        };
    } catch (error) {
        console.log("profile page.tsx error: ", error);
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

export default async function ProfileDetailRoute(props: TProps) {
    const data = await loader();

    return <ProfileDetail data={data} />
}