import styled from './ItemDetail.module.css'

export const ItemDetail = ({ producto }) => {
	const { id, title, description, price, pictureUrl } = producto

	return (
		<div className={styled.detailConteiner}>
			<div className={styled.product}>
				<img className={styled.imgProduct} src={pictureUrl} />
				<div className={styled.productBox}>
					<h4 className={styled.productCategorie}>Categoría/ </h4>
					<h2 className={styled.nameProduct}>{title}</h2>
					<p className={styled.priceProduct}>Precio $ {price}</p>
				</div>
				<section className={styled.buysBox}>
					<h2 className={styled.shippingDate}>Fecha de envío 10 de Abril</h2>
					<p className={styled.shippingCost}>Costo de envio $899</p>
					<p className={styled.availableStock}>Stock disponible 10</p>
					<button className={styled.buysButton} type='button'>
						Comprar ahora
					</button>
				</section>
			</div>
			<div className={styled.descriptionBox}>
				<p className={styled.descriptionProduct}>{description}</p>
			</div>
		</div>
	)
}
