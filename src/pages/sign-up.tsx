import { useUser } from "@supabase/auth-helpers-react";
import { Auth, ThemeSupa } from "@supabase/auth-ui-react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../components/header";
import supabase from "../utils/supabase";

const SignUpPage = () => {
  const user = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <div>
      <Head>
        <title>Sign Up - GradeMyAid</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="relative flex min-h-screen items-center justify-center bg-emerald-100">
        <div className="w-full max-w-xl rounded-2xl bg-white p-16 shadow-lg shadow-emerald-200">
          <Auth
            supabaseClient={supabase}
            redirectTo={
              process.env.NODE_ENV === "development"
                ? "http://localhost:3000/"
                : "https://cs1530-finance-group.vercel.app/"
            }
            appearance={{ theme: ThemeSupa }}
            theme="default"
            providers={["google", "facebook"]}
            socialLayout="horizontal"
            view="sign_up"
          />
        </div>
      </main>
    </div>
  );
};

export default SignUpPage;
