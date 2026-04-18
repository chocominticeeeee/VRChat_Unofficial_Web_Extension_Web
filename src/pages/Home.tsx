import topImage from "../../assets/トップ画像.jpg";
import categoryAdd from "../../assets/カテゴリ追加.jpeg";
import categoryManage from "../../assets/カテゴリ管理.jpeg";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

const storeURL =
    "https://chromewebstore.google.com/detail/vrchat-%E9%9D%9E%E5%85%AC%E5%BC%8Fweb%E6%8B%A1%E5%BC%B5/dmkhoihpdaoojnefijfhegfabgonmgkn?authuser=0&hl=ja&pli=1";

const screenshots = [
    { src: topImage, alt: "トップ画像" },
    { src: categoryAdd, alt: "カテゴリ追加" },
    { src: categoryManage, alt: "カテゴリ管理" },
];

const card = "bg-[#1a1d27] border border-[#2a2d3a] rounded-[10px] p-6 mt-5";

const features = [
    {
        icon: "🗂️",
        title: "アバターカテゴリ管理",
        description:
            "アバターをカテゴリに分類して整理できます。カテゴリは最大8個まで作成でき、★アイコンの色を8色から選べます。",
    },
    {
        icon: "🔍",
        title: "カテゴリフィルター",
        description:
            "「すべて」「未分類」「カテゴリ別」でアバター一覧を絞り込み表示。目的のアバターをすばやく見つけられます。",
    },
    {
        icon: "🔢",
        title: "アバター総数表示",
        description: "My Avatars に所持アバターの総数をリアルタイムで表示します。",
    },
    {
        icon: "⚡",
        title: "全件自動読み込み",
        description: "「もっと見る」ボタンを自動クリックして、ページを開いた瞬間にアバターを全件読み込みます。",
    },
];

export default function Home() {
    return (
        <div>
            <h1 className="text-[1.8rem] font-bold mb-2">VRChat 非公式Web拡張</h1>
            <p className="text-[#8b8fa8] mb-8">VRChat公式サイトをもっと使いやすく</p>

            <section className="bg-[#1a2035] border border-[#3a4a7a] rounded-[10px] p-5 mt-5">
                <h2 className="text-lg mb-3 text-[#7a9fff] flex items-center gap-2">
                    <span>📢</span> お知らせ
                </h2>
                <ul className="space-y-2 text-[#e8eaf0]">
                    <li className="flex gap-2 text-sm leading-6">
                        <span className="text-[#8b8fa8] shrink-0">2026/04/19</span>
                        <span>
                            バージョン <strong className="text-[#7a9fff]">1.2.0</strong> をChrome
                            ウェブストアに申請し、現在審査待ちです。 <br />
                            審査が完了してストアに公開されたら
                            <a
                                href="https://x.com/Choccomintice"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#7a9fff] underline"
                            >
                                X（Twitter）
                            </a>
                            でアナウンスしますので今しばらくお待ちください。
                        </span>
                    </li>
                </ul>
            </section>

            <section className={card}>
                <h2 className="text-lg mb-3 text-[#6c8fff]">概要</h2>
                <p className="leading-7 text-[#e8eaf0]">
                    VRChat 非公式Web拡張は、VRChat公式サイト（
                    <a href="https://vrchat.com/home" target="_blank" rel="noreferrer">
                        vrchat.com
                    </a>
                    ）をより快適に使えるようにするChrome拡張機能です。
                    <br />
                    <br />
                    現在はアバター一覧のグリッド表示とカテゴリ管理機能を提供しています。今後も機能追加や改善を予定しています。
                </p>
                <Carousel className="mt-3 w-full">
                    <CarouselContent>
                        {screenshots.map((img) => (
                            <CarouselItem key={img.alt}>
                                <img src={img.src} alt={img.alt} className="w-full rounded-lg block" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>

            <section className={card}>
                <h2 className="text-lg mb-4 text-[#6c8fff]">機能紹介</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {features.map((f) => (
                        <div key={f.title} className="bg-[#12141e] border border-[#2a2d3a] rounded-lg p-4 flex gap-3">
                            <span className="text-2xl leading-none mt-0.5">{f.icon}</span>
                            <div>
                                <h3 className="font-semibold text-[#e8eaf0] mb-1">{f.title}</h3>
                                <p className="text-sm text-[#8b8fa8] leading-6">{f.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className={card}>
                <h2 className="text-lg mb-3 text-[#6c8fff]">インストール</h2>
                <p className="leading-7 text-[#e8eaf0]">
                    <a href={storeURL} target="_blank" rel="noopener noreferrer">
                        Chrome ウェブストア
                    </a>
                    からインストールできます。
                </p>
            </section>

            <section className={card}>
                <h2 className="text-lg mb-3 text-[#6c8fff]">制作者</h2>
                <p className="leading-7 text-[#e8eaf0]">
                    <a href="https://x.com/Choccomintice" target="_blank" rel="noreferrer">
                        ばぶ宮ちょこみん🍼🌱
                    </a>
                </p>
            </section>
        </div>
    );
}
