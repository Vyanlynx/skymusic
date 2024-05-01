import { AppDispatch } from '@/redux/store';
import style from './MenuLists.module.scss';
import { useDispatch } from "react-redux";
import { setShowPlayListPopUp } from '@/redux/slice/ExploreStoreSlice';

export interface MenuListProps {
    list: string[],
    header: string
}
const MenuLists = ({ header, list }: MenuListProps): JSX.Element => {
    let dispatch: AppDispatch = useDispatch();
    const handleClick = (items: string) => {
        dispatch(setShowPlayListPopUp(items))
    }
    return (
        <section className={style.menu_list}>
            <div className={style.title}>{header}</div>
            {list?.length && list?.map((items: string) => {
                return <button className={`${style.item} secondaryButton`}
                    onClick={()=>handleClick(items)}
                    key={items}>{items}</button>
            })}
        </section>
    )
}
export default MenuLists;