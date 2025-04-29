
type FooterLinkProps = {
    text: string;
    url: string;
};

function FooterLink({ text, url }: FooterLinkProps) {
    return <a className="transition hover:text-teal-500" href={url}>{text}</a>;
}

export default function Footer() {
    return (
        <footer className="flex justify-center mx-auto max-w-7x1 h-16 pt-6">
            <nav>
                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium 
                text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
                    <li className="px-3 py-2"><FooterLink text="Tentang Saya" url="/" /></li>
                    <li className="px-3 py-2"><FooterLink text="Proyek" url="/projects" /></li>
                    <li className="px-3 py-2"><FooterLink text="Esai" url="/essays" /></li>
                </ul>
            </nav>
        </footer>
    );
}