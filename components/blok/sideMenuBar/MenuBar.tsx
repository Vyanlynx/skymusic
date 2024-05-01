import MenuLists from "@/components/generic/menuLists/MenuLists"
import CMSdata from '@/cms/MenuBar.json';
import { useSelector } from 'react-redux';

export default function MenuBar() {
  const { isOpenMenu } = useSelector((state: any) => state.ExplorePageDetails);

  return (<>
    <nav aria-label="Main" role="navigation" className={isOpenMenu ? "menubar w-0" : 'menubarMobile'}>
      {CMSdata[0]?.menubar?.map((items: any,index:number) => {
        return <MenuLists key={index} {...items} />
      })}</nav></>
  )
}
