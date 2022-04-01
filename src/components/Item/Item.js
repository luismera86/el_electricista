import './Item.scss'
export const Item = ({products}) => {

  const {title, description, price, pictureUrl} = products

  
  return (
    <div className='item'>
      <h2>{title}</h2>
      <img className='img-producto' src={pictureUrl} alt="" />
      <p>{description}</p>
      <h4>Pecio ${price}</h4>
    </div>
  )
}
