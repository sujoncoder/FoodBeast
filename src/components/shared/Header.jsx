import Link from "next/link";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <Link href="/" className="text-primary font-semibold text-2xl">
        Food<span className="text-slate-500">Beast</span>
      </Link>

      <nav className="flex justify-center items-center gap-4 text-slate-500 font-semibold">
        <Link href="">Home</Link>
        <Link href="">Menu</Link>
        <Link href="">About</Link>
        <Link href="">Contact</Link>
      </nav>

      <div className="space-x-4">
        <Link href="/login" className="text-slate-500  active:text-slate-600">
          Login
        </Link>
        <Link
          href="/register"
          className="text-white bg-red-500 shadow rounded-full hover:brightness-105 duration-200 active:bg-red-600 px-4 py-1.5"
        >
          Register
        </Link>
      </div>
    </header>
  );
};

export default Header;
