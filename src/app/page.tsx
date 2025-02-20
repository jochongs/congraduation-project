import { getNameFromHost } from '@/util/getNameFromHost';
import { headers } from 'next/headers';

export default async function Home() {
    const headerList = headers();
    const host = (await headerList).get('host');

    console.log(getNameFromHost(host));

    return <div></div>;
}
