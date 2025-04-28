"use client";

import { useAuthStore } from "@/stores/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const { user, clearAuth } = useAuthStore();

  const logout = () => {
    clearAuth();
    router.push("/login");
  };

  return (
    <nav className="bg-slate-400">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <Link href="/" className="text-lg font-bold">
            Logo
          </Link>

          <div className="flex items-center gap-4">
            <Link href="/" className="hover:underline">Home</Link>

            <Link href="/write" className="hover:underline">Write</Link>

            {!user && <Link href="/login" className="hover:underline">Sign in</Link>}

            {!!user && (
              <button
                onClick={logout}
                type="button"
                className="text-red-600 hover:underline cursor-pointer"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
