import { useRouter } from 'next/navigation'

const EmptyCategoryState = ({ categoryName }: { categoryName: string }) => {
  const router = useRouter()
  return <div>EmptyCategoryState</div>
}

export default EmptyCategoryState
