interface ChangelogEntry {
    version: string;
    date: string;
    changes: string[];
}

const changelog: ChangelogEntry[] = [
    {
        version: "1.2.0",
        date: "2026年4月18日",
        changes: [
            "サイト側の更新により拡張機能が動作しなくなった問題を修正",
            "アバター一覧でカテゴリの作成、追加、フィルタリング表示する機能を追加",
        ],
    },
    {
        version: "0.1.0",
        date: "2025年8月2日",
        changes: ["初回リリース"],
    },
];

export default function Changelog() {
    return (
        <div>
            <h1 className="text-[1.8rem] font-bold mb-2">更新履歴</h1>

            {changelog.map((entry) => (
                <section key={entry.version} className="bg-[#1a1d27] border border-[#2a2d3a] rounded-[10px] p-6 mt-5">
                    <div className="flex items-center gap-3 mb-3">
                        <span className="bg-[#6c8fff] text-white text-xs font-bold px-[0.6rem] py-[0.2rem] rounded">
                            v{entry.version}
                        </span>
                        <span className="text-[0.85rem] text-[#8b8fa8]">{entry.date}</span>
                    </div>
                    <ul className="pl-5 flex flex-col gap-[0.4rem] list-disc">
                        {entry.changes.map((change, i) => (
                            <li key={i} className="leading-7 text-[#e8eaf0]">
                                {change}
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
}
