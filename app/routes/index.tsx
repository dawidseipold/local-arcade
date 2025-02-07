// app/routes/index.tsx
import { createFileRoute, useRouter } from "@tanstack/react-router";
import Header from "@/components/layout/header/Header";
import AdBanner from "@/components/layout/ad-banner/AdBanner";
import { cn } from "@/utils/cn";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const router = useRouter();
  const state = Route.useLoaderData();

  return (
    <div className={cn("flex flex-col gap-y-8 items-center")}>
      <Header />

      <div className="flex flex-col gap-y-8 items-center container px-4 md:px-8">
        <AdBanner />
      </div>
    </div>
  );
}
