import styled from './ItemDetail.module.css'

export const ItemDetail = ({ producto }) => {
	const { nombre, precio, img, descripcion, categoria, stock } = producto
	return (
		<div className={styled.detailConteiner}>
			<div className={styled.product}>
				<img className={styled.imgProduct} src={img} />
				<div className={styled.productBox}>
					<h4 className={styled.productCategorie}>Categoría/ {categoria}</h4>
					<h2 className={styled.nameProduct}>{nombre}</h2>
					<p className={styled.priceProduct}>Precio {precio}</p>
				</div>
				<section className={styled.buysBox}>
					<h2 className={styled.shippingDate}>Fecha de envío 10 de Abril</h2>
					<p className={styled.shippingCost}>Costo de envio $899</p>
					<p className={styled.availableStock}>Stock disponible {stock}</p>
					<button className={styled.buysButton} type='button'>
						Comprar ahora
					</button>
				</section>
			</div>
			<div className={styled.descriptionBox}>
				<p className={styled.descriptionProduct}>{descripcion}</p>
			</div>
		</div>
	)
}
