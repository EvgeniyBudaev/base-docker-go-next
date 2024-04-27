"use client"

import styles from "@/app/(routes)/page.module.css";

export const ClientEnv = () => {
    const apiUrl = process?.env?.NEXT_PUBLIC_API_URL ?? "undefined";
    const nodeEnv = process?.env?.NEXT_PUBLIC_NODE_ENV ?? "undefined";

    return (
        <div>
            <div className={styles.block}>
                <h4>Client NEXT_PUBLIC_API_URL: {apiUrl}</h4>
            </div>
            <hr/>
            <div className={styles.block}>
                <h4>Client NEXT_PUBLIC_NODE_ENV: {nodeEnv}</h4>
            </div>
        </div>
    )
}