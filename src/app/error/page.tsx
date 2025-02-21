import { getNameFromHost } from '@/util/getNameFromHost';
import { headers } from 'next/headers';

export default async function Error() {
    const headerList = headers();
    const host = (await headerList).get('host');
    const userName = getNameFromHost(host);

    return (
        <div className="w-full max-w-[600px] mx-auto">
            <h1
                className="my-10 mx-10"
                style={{
                    fontSize: '30px',
                }}>
                {host} 등록되지 않은 이름입니다.ddd
            </h1>
        </div>
    );
}
