import React, { Fragment, useState } from 'react';
import { AllImgData } from '../database';
import Lightbox from "react-image-lightbox";

const AllImgFun = ({ className, title, subTitle }) => {

    const initilindex = { index: 0, isOpen: false }
    const [photoIndex, setPhotoIndex] = useState(initilindex)

    const onClickImg = (img, i) => {
        setPhotoIndex({ ...photoIndex, index: i, image: img, isOpen: true })
    }

    const onMoveNext = () => {
        const next = (photoIndex.index + 1) % AllImgData.length
        const test = AllImgData[(photoIndex.index + 1) % AllImgData.length]
        setPhotoIndex({ ...photoIndex, index: next, image: test.img })
    }
    const onMovePrev = () => {
        const prev = (photoIndex.index + AllImgData.length - 1) % AllImgData.length
        const test = AllImgData[(photoIndex.index + AllImgData.length - 1) % AllImgData.length];
        setPhotoIndex({ ...photoIndex, index: prev, image: test.img })
    }

    return (
        <Fragment>
            {AllImgData.length > 0 ?
                AllImgData.map((item, i) => (
                    <div className={className} key={i}>
                        <div className="overlay">
                            <div className="border-portfolio">
                                <div className="overlay-background" onClick={() => onClickImg(item.img, i)}>
                                    <i aria-hidden="true" className="fa fa-plus"></i>
                                </div>
                                <img alt="" className="img-fluid blur-up lazyload"
                                    src={`/assets/images/${item.img}`} />
                            </div>
                        </div>
                        {title &&
                            <div className="portfolio-text">
                                <h3 className="head-text">
                                    {title}
                                </h3>
                                <h6 className="head-sub-text">
                                    {subTitle}
                                </h6>
                            </div>}
                    </div>
                ))
                : ""}
            {
                photoIndex.isOpen && (
                    <>
                        {console.log("${AllImgData[(photoIndex.index + 1) % AllImgData.length]}", AllImgData[(photoIndex.index + 1) % AllImgData.length].img)}
                        {console.log("Image", photoIndex.image, "========", `/assets/images${AllImgData[(photoIndex.index + 1) % AllImgData.length].img}`)}
                        <Lightbox
                            mainSrc={`/assets/images${photoIndex.image}`}
                            nextSrc={`/assets/images${AllImgData[(photoIndex.index + 1) % AllImgData.length].img}`}
                            prevSrc={`/assets/images${AllImgData[(photoIndex.index + AllImgData.length - 1) % AllImgData.length].img}`}
                            imageTitle={photoIndex.index + 1 + "/" + AllImgData.length}
                            onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                            onMovePrevRequest={onMovePrev}
                            onMoveNextRequest={onMoveNext}
                        />
                    </>
                )
            }
        </Fragment>
    )
}

export default AllImgFun;