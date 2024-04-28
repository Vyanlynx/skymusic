import MenuLists from "@/components/generic/menuLists/MenuLists"
import CMSdata from '@/cms/MenuBar.json';

export default function MenuBar() {
  return (
    <div>{CMSdata[0]?.menubar?.map((items: any) => {
      return <MenuLists {...items} />
    })}</div>
  )
}
