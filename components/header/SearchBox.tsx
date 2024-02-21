'use client'
import { useSearchParams } from 'next/navigation'

export const SearchBox = () => {
  const searchParams = useSearchParams()
  const q = searchParams.get('q') || ''

  return (
    <form action="/search?category=all" method="GET">
      <div className="join">
        <input
          className="join-item input input-bordered  w-48"
          placeholder="Search"
          defaultValue={q}
          name="q"
        />
        <button className="join-item btn">Search</button>
      </div>
    </form>
  )
}
