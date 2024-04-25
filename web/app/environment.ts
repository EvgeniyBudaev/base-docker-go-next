export type EnvironmentType = {
  NEXT_PUBLIC_API_URL: string;
  NEXT_PUBLIC_NODE_ENV: string;
};

const { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_NODE_ENV } = process?.env;

/**
 * Переменные окружения
 */
export const Environment: EnvironmentType = {
  NEXT_PUBLIC_API_URL: NEXT_PUBLIC_API_URL ?? undefined,
  NEXT_PUBLIC_NODE_ENV: NEXT_PUBLIC_NODE_ENV ?? undefined,
};
