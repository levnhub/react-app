import React from 'react'
import { Link } from '@reach/router'
import FeaturedImage from './FeaturedImage';

const Post = ( props  ) => {

  const { post } = props;

  return (
    <div className="post-wrapper">
      {/* Title */}
      { post.title ? <Link className="post-title" to={ `/post/${post.id}` }>{ post.title }</Link> : '' }

      {/* Featured Image */}
      { post.attachment_image.img_sizes ? <FeaturedImage title={ post.title } image={ post.attachment_image }/> : '' }

      {/* Excerpt */}
      { post.excerpt ? <p className="post-excerpt">{ post.excerpt }</p> : '' }

      {/* Post meta */}
      <div className="post-meta">
        {/* Author */}
        <Link to={ `/author/${ post.meta.author_id }` } className="post-author">
          <i className="bi bi-person-fill"/>
          <span>{ post.meta.author_name }</span>
        </Link>

        {/* Post date */}
        <div className="post-date">
          <i className="bi bi-alarm-fill"/>
          <span>{ post.date }</span>
        </div>

        {/* Post Categories */}
        { post.categories.length ? (
          <div className="post-category">
            <i className="bi bi-folder-fill"/>
            {
              post.categories.map( ( category, index ) => (
                // If its not the last item.
                index !== (post.categories.length - 1) ?
                  <Link to={ `category/${ category.term_id }` } key={ category.name }>{ category.name }, </Link>
                :
                  <Link to={ `category/${ category.term_id }` } key={ category.name }>{ category.name }</Link>
              ) )
            }
          </div>
        ) : '' }
      </div>

    </div>
  )
}

export default Post
