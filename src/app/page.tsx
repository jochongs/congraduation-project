import { getNameFromHost } from '@/util/getNameFromHost';
import { prisma } from '@/util/prisma';
import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export async function generateMetadata(): Promise<Metadata> {
    const userName = await getNameFromHost();
    const user = await prisma.user.findFirst({ where: { userName } });

    if (!user) {
        redirect('/error');
    }

    return {
        title: `${user.userName} 졸업 축하해!`,
        description: `단, 한 사람을 위한 사이트`,
        openGraph: {
            title: `${user.userName} 졸업 축하해!`,
            siteName: '졸업축하해!',
            images: `https://congraduation.s3.ap-northeast-2.amazonaws.com${user.thumbnailImgPath}`,
            url: `https://${user.userName}.졸업축하해.com`,
        },
    };
}

export default async function Home() {
    const userName = await getNameFromHost();
    const user = await prisma.user.findFirst({ where: { userName } });

    if (!user) {
        redirect('/error');
    }

    return (
        <div
            className="w-full max-w-[600px] mx-auto flex items-center h-[100vh]"
            style={{
                backgroundColor: user.backgroundColor,
            }}>
            <img src={`https://congraduation.s3.ap-northeast-2.amazonaws.com${user.imgPath}`} alt="" />
        </div>
    );
}
