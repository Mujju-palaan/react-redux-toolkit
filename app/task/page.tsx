import FilterItem from '@/components/Items/FilterItem'
import ItemForm from '@/components/Items/ItemForm'
import ShowItems from '@/components/Items/ShowItems'

const Task = () => {
  return (
    <div className="justify-center items-center my-4 flex flex-col">
        <ItemForm />
        <FilterItem />
        <ShowItems />
    </div>
  )
}

export default Task