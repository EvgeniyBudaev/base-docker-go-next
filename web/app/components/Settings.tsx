import type {FC} from "react";

type TProps = {
    data: any;
}

export const Settings: FC<TProps> = ({data}) => {
    return (
        <section>
            <h1>Settings page</h1>
            <div>
                <h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </h3>
            </div>
        </section>
    )
}