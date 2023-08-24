'use client'
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { Session } from "@supabase/auth-helpers-nextjs";
import { useEffect, useState } from "react";
import supabase from "@/lib/supabase";

export default function Login() {
  const [session, setSession] = useState<Session | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    if (typeof window !== "undefined") {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session);
      });

      return () => subscription.unsubscribe();
    }
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Auth
      supabaseClient={supabase}
      // view="magic_link"
      appearance={{ theme: ThemeSupa }}
      // theme="dark"
      // showLinks={false}
      // providers={[]}
      // redirectTo="http://localhost:3000/auth/callback"
    />
  );
}
