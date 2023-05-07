export default function Erro404() {
  return (
    <main className="flex flex-col items-center justify-center gap-3 h-[100vh]">
      <h1 className="text-6xl">404</h1>
      <h2 className="text-2xl">Page not found</h2>
      <p>Could not find the page you were looking for.</p>
      <a href="/" className="text-blue-500 hover:text-blue-300 hover:underline">
        Return Home
      </a>
    </main>
  )
}
