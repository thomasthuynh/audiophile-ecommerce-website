import { Product } from "../types"


type Props = {
  item: Product;
}

const ModelCard = ({ item }: Props) => {

  return (
    <div className="w-5/6 mx-auto flex flex-col items-center">
      <picture>
        <source media="(min-width: 1280px)" srcSet={item.categoryImage.desktop}/>
        <source media="(min-width: 768px)" srcSet={item.categoryImage.tablet}/>
        <img src={item.categoryImage.mobile} alt="XX99 Mark II Headphones" className="rounded pb-4"/>
      </picture>
      {item.new && <p className="text-xs uppercase tracking-[10px] text-primary-500 py-2 sm:text-base">New Product</p>}
      <h2 className="text-2xl w-[90%] text-center uppercase pt-4">{item.name}</h2>
      <p className="text-center py-6">{item.description}</p>
      <button className="bg-primary-500 hover:bg-primary-300 px-6 py-3 text-sm uppercase tracking-[1px] text-white sm:px-8 sm:py-4 sm:text-base">See Product</button>
    </div>
  )
}

export default ModelCard