const card = "bg-[#1a1d27] border border-[#2a2d3a] rounded-[10px] p-6 mt-5"

export default function PrivacyPolicy() {
  return (
    <div>
      <h1 className="text-[1.8rem] font-bold mb-2">プライバシーポリシー</h1>

      <section className={card}>
        <h2 className="text-lg mb-3 text-[#6c8fff]">収集する情報について</h2>
        <p className="leading-7 text-[#e8eaf0]">
          VRChat 非公式Web拡張は、メールアドレス・ログイン情報・パスワード・位置情報・フォームデータ等、
          いかなる個人情報もユーザーから収集しません。
        </p>
      </section>

      <section className={card}>
        <h2 className="text-lg mb-3 text-[#6c8fff]">外部サービスへの送信</h2>
        <p className="leading-7 text-[#e8eaf0]">
          本拡張機能は、ユーザーのデータを外部サーバーへ送信しません。
          すべての処理はブラウザ内でのみ行われます。
        </p>
      </section>

      <section className={card}>
        <h2 className="text-lg mb-3 text-[#6c8fff]">お問い合わせ</h2>
        <p className="leading-7 text-[#e8eaf0]">
          ご不明な点がある場合は、{' '}
          <a href="https://x.com/Choccomintice" target="_blank" rel="noreferrer">
            X（旧Twitter）
          </a>{' '}
          よりご連絡ください。
        </p>
      </section>
    </div>
  )
}
