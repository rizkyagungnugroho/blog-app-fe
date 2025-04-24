"use client";
import { axiosInstance } from "@/lib/axios";
import { User } from "@/types/user";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const useForgotPassword = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: async (payload: Pick<User, "email">) => {
      const { data } = await axiosInstance.post("/auth/forgot-password", payload);
      return data;
    },
    onSuccess: () => {
      toast.success("Email sent successfully, please check your inbox.");
      // router.push("/login"); // Aktifkan jika ingin redirect
    },
    onError: (error: AxiosError<any>) => {
      toast.error(error.response?.data.message || "Failed to send email");
    },
  });
};

export default useForgotPassword;
