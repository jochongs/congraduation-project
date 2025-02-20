import { getNameFromHost } from '@/util/getNameFromHost';
import { prisma } from '@/util/prisma';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
    const headerList = headers();
    const host = (await headerList).get('host');

    const userName = getNameFromHost(host);

    if (!userName) {
        redirect('/error');
    }

    const user = await prisma.user.findFirst({ where: { userName } });

    if (!user) {
        redirect('/error');
    }

    return (
        <div className="w-full max-w-[600px] mx-auto">
            <img src={`https://congraduation.s3.ap-northeast-2.amazonaws.com${user.imgPath}`} alt="" />
        </div>
    );
}
