import { NavLink } from 'react-router-dom'

const linkBase = 'px-[0.85rem] py-[0.4rem] rounded-md text-[0.9rem] transition-colors duration-150 no-underline hover:no-underline'
const linkInactive = `${linkBase} text-[#8b8fa8] hover:text-[#e8eaf0] hover:bg-[#2a2d3a]`
const linkActive = `${linkBase} text-[#6c8fff] bg-[rgba(108,143,255,0.12)]`

export default function Nav() {
  return (
    <header className="bg-[#1a1d27] border-b border-[#2a2d3a] sticky top-0 z-10">
      <div className="max-w-[860px] mx-auto px-6 h-14 flex items-center gap-8 max-[480px]:flex-col max-[480px]:h-auto max-[480px]:px-4 max-[480px]:py-3 max-[480px]:gap-2 max-[480px]:items-start">
        <span className="font-bold text-base whitespace-nowrap text-[#e8eaf0] flex items-center">
          <img src="/favicon.ico" alt="" className="w-6 h-6 mr-2 align-middle" />
          VRChat 非公式Web拡張
        </span>
        <nav className="flex gap-1 flex-wrap">
          <NavLink to="/" end className={({ isActive }) => isActive ? linkActive : linkInactive}>
            トップ
          </NavLink>
          <NavLink to="/changelog" className={({ isActive }) => isActive ? linkActive : linkInactive}>
            更新履歴
          </NavLink>
          <NavLink to="/privacy" className={({ isActive }) => isActive ? linkActive : linkInactive}>
            プライバシーポリシー
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
