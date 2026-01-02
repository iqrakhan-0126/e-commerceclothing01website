import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="description-nav-box">Description</div>
        <div className="description-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>We believe fashion should be accessible, affordable, and enjoyable.
          Our platform offers a wide range of styles to suit every taste and budget.
          From stylish t-shirts and elegant dresses to comfy loungewear and activewear,
          our clothing is handpicked for quality and comfort. Enjoy exclusive offers,
          seasonal discounts, and a user-friendly interface designed to make your shopping
          experience smooth and satisfying.</p>

        <p>Welcome to our online fashion store your one-stop destination for stylish,
          affordable, and high-quality clothing. Whether you're looking for trendy outfits,
          everyday essentials, or exclusive seasonal collections, we've got something for
          everyone. Shop from a wide range of men's, women's, and kids' apparel,
          all carefully curated to match your style and comfort.
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
