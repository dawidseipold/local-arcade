// app/routes/index.tsx
import { createFileRoute, useRouter } from '@tanstack/react-router'
import Header from "../components/layout/header/Header.tsx";

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {
    const router = useRouter()
    const state = Route.useLoaderData()

    return (
        <div className="bg-red-500">
            <Header />
            Hello World!
        </div>
    )
}