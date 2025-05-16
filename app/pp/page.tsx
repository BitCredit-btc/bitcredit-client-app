import dynamic from 'next/dynamic';

const BitcoinScene = dynamic(() => import('./BitcoinScene'), {
    ssr: false,
});

export default function Home() {
    return (
        <div className="h-screen w-screen bg-black text-white relative">
            <BitcoinScene />
        </div>
    );
}
