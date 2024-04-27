import Image from "next/image";
import Link from "next/link";
import {ClientEnv} from "@/app/components/ClientEnv";
import {UserForm} from "@/app/components/UserForm";
import {Environment} from "@/app/environment";
import styles from "./page.module.css";

export default function Home() {
  const apiUrl = Environment?.NEXT_PUBLIC_API_URL ?? "undefined";
  const nodeEnv = Environment?.NEXT_PUBLIC_NODE_ENV ?? "undefined";

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <div className={styles.block}>
          <Image
              className={styles.logo}
              src="/next.svg"
              alt="Next.js Logo"
              width={180}
              height={37}
              priority
          />
        </div>
        <div className={styles.block}>
          <h4>Server NEXT_PUBLIC_API_URL: {apiUrl}</h4>
        </div>
        <hr/>
        <div className={styles.block}>
          <h4>Server NEXT_PUBLIC_NODE_ENV: {nodeEnv}</h4>
        </div>
        <hr/>
        <div className={styles.block}>
          <ClientEnv/>
        </div>
        <hr/>
        <div className={styles.block}>
          <UserForm/>
        </div>
        <hr/>
        <div className={styles.block}>
          <Link className={styles.link} href={"/user"}>go to user detail page</Link>
        </div>
        <hr/>
        <div className={styles.block}>
          <Link className={styles.link} href={"/profile"}>go to profile detail page</Link>
        </div>
      </div>
    </main>
  );
}
