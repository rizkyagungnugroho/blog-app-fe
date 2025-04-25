"use client";
import { useAuthStore } from "@/stores/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter(); // harus dipanggil sebagai fungsi
  const { user, clearAuth } = useAuthStore(); // juga harus dipanggil

  const logout = () => {
    clearAuth(); // pastikan nama method-nya sesuai
    router.push("/login");
  };

  return (
    <nav className="bg-slate-400">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link href="/">Logo</Link>
         
            <div className="flex items-center gap-4">
            <Link href="/">Home</Link>
            {!!user && <Link href="/write">Write</Link>}
            {!user && <Link href="/login">Sign in</Link>}
            {!!user && <p onClick={logout}>Logout</p>}
          </div>
        </div>
        </div>
    </nav>
  );
};

export default Navbar;
