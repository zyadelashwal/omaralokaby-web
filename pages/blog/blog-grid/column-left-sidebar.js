import React from 'react'
import { Container, Row, Col } from 'reactstrap'
// import Custom Components
import CommonLayout from "../../../containers/common/common-layout"
import CardWrapper from "../../../containers/blog/card/grid-wrapper"
import Categories from "../../../containers/blog/categories"
import PopularPosts from "../../../containers/blog/posts"
import NewsLetter from "../../../containers/blog/newsletter"
import Instagram from "../../../containers/blog/instagram"
import { gql, useQuery } from '@apollo/client'

const query = gql`{
    blogs {
      id
      title
      place
      image
      description
      readUrl
      likes
      comments
      createdAt
      createdBy
    }
  }`;

const LeftSidebar = () => {
    const { data } = useQuery(query);

    return (
        <>
            <CommonLayout pathList={['blog', 'blog grid view', 'left sidebar']} pathTitle="BLOG WITH Left-SIDEBAR" >
                <section className="agency blog blog-sec blog-sidebar">
                    <Container>
                        <Row>
                            <Col lg="9" className="order-lg-2">
                                <Row>
                                    {data !== undefined ?
                                        data.blogs.map((item, index) =>
                                            <CardWrapper
                                                key={`grid-no-sidebar-${index}`}
                                                className="col-md-6"
                                                image={item.image}
                                                blogDate={item.createdAt}
                                                place={item.place}
                                                title={item.title}
                                                description={item.description}
                                                readUrl={item.readUrl}
                                            />
                                        ) :
                                        '!! No Blogs Found'}
                                </Row>
                            </Col>
                            <Col lg="3">
                                <div className="blog-side">
                                    <Categories />
                                    <PopularPosts />
                                    <NewsLetter />
                                    <Instagram />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </CommonLayout>
        </>
    )
}

export default LeftSidebar;