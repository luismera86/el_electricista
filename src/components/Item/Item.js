import styled from './Item.module.css'
export const Item = ({ products }) => {
	const { title, description, price, pictureUrl } = products

	return (
		<div className={styled.item}>
			<h2 className={styled.h2}>{title}</h2>
			<img className={styled.imgProducto} src={pictureUrl} alt='' />
			<p className={styled.p}>{description}</p>
			<h4 className={styled.h4}>Pecio ${price}</h4>
		</div>
	)
}
