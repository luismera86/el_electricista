

export const ItemDetail = ({producto}) => {

    const { id, nombre, precio, img, descripcion, categoria } = producto

  return (
    <div>
        <img src={img} alt="" />
    </div>
  )
}
