import type {FC} from "react";

type TProps = {
    data: any;
}

export const ProfileDetail: FC<TProps> = ({data}) => {
    return (
        <section>
            <h1>Profile detail page</h1>
            <div>
                <h3>
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </h3>
            </div>
        </section>
    )
}