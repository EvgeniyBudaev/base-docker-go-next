"use client"

export const ClientEnv = () => {
    return (
        <div>
            <h4>Client ENV: {process.env?.NEXT_PUBLIC_API_URL}</h4>
        </div>
    )
}