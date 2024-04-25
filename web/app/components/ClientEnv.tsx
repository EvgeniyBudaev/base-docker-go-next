"use client"

export const ClientEnv = () => {
    const env = process?.env?.NEXT_PUBLIC_API_URL ?? "undefined";
    return (
        <div>
            <h4>Client ENV: {env}</h4>
        </div>
    )
}