interface ProductModel {
  brandName: string
  colour: string
  colourWayId: number
  groupId?: null
  hasMultiplePrices: boolean
  hasVariantColours: boolean
  id: number
  imageUrl: string
  isSellingFast: boolean
  name: string,
  url: string,
  price: {
    currency: string
    current: {
      text: string
      value: number
    }
  }
}

export default ProductModel
