import ResetPasswordPage from "@/features/reset-password";

interface ResetPasswordPageProps {
  params: {
    token: string;
  };
}

const ResetPassword = ({ params }: ResetPasswordPageProps) => {
  return <ResetPasswordPage token={params.token} />;
};

export default ResetPassword;
