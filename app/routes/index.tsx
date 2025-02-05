// app/routes/index.tsx
import { createFileRoute, useRouter } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
    component: Home,
})

function Home() {
    const router = useRouter()
    const state = Route.useLoaderData()

    return (
        <div>
            Hello World!
        </div>
    )
}