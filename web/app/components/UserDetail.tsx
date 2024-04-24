import type {FC} from "react";

type TProps = {
    data: any;
}

export const UserDetail: FC<TProps> = ({data}) => {
    return (
        <section>
            <h1>User detail page</h1>
            <div>
                <h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </h3>
            </div>
        </section>
    )
}