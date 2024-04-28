import style from './MenuLists.module.scss'
export interface MenuListProps {
    list: string[],
    header: string
}
const MenuLists = ({ header, list }: MenuListProps): JSX.Element => {
    return (
        <section className={style.menu_list}>
            <div className={style.title}>{header}</div>
            {list?.length && list?.map((items: string) => {
                return <button className={`${style.item} secondaryButton`} key={items}>{items}</button>
            })}
        </section>
    )
}
export default MenuLists;