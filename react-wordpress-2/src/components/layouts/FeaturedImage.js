import React from 'react'

const FeaturedImage = ( props ) => {

  const { img_src, img_srcset } = props.image;
  const { title } = props;

  return (
    <img 
      className="post-attachment-thumbnail" 
      width={ img_src[1] } 
      height={ img_src[2] } 
      src={ img_src[0] } 
      srcSet={ img_srcset ? img_srcset : '' } 
      alt={ title }
    />
  )
}

export default FeaturedImage
