export const getNameFromHost = (host: string | null): string | null => {
    if (process.env.NEXT_PUBLIC_MODE === 'develop') {
        return '테스트';
    }

    if (!host) return null;

    return host.split('.')[0] || null;
};
