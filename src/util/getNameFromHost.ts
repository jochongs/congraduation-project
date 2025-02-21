import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import punycode from 'punycode/';

export const getNameFromHost = async (): Promise<string> => {
    if (process.env.NEXT_PUBLIC_MODE === 'develop') {
        return '테스트';
    }

    const headerList = headers();
    const host = (await headerList).get('host');

    if (!host) {
        redirect('/error');
    }

    const decodedHost = punycode.toUnicode(host);

    if (!decodedHost) {
        redirect('/error');
    }

    return decodedHost.split('.')[0];
};
