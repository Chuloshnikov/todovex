import { Button } from "@/components/ui/button";
import Tasks from "@/components/todovex/tasks";
import { signInAction } from "@/actions/auth-action";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Todovex</h1>
      <form action={signInAction}>
        <Button>Log in</Button>
      </form>
    </main>
  );
}
