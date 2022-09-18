import React, { Fragment, useState } from 'react';
import { AllImgData, BagsImgData, FeshionImgData, ShoesImgData, WatchImgData } from '../database';
import Lightbox from "react-image-lightbox";

const FashionImgFunc = ({ className, title, subTitle }) => {
    const initilindex = { index: 0, isOpen: false }
    const [photoIndex, setPhotoIndex] = useState(initilindex)

    const onClickImg = (img, i) => {
        setPhotoIndex({ ...photoIndex, index: i, image: img, isOpen: true })
    }

    const onMovePrev = () => {
        const prev = (photoIndex.index + FeshionImgData.length - 1) % FeshionImgData.length
        const test = FeshionImgData[(photoIndex.index + FeshionImgData.length - 1) % FeshionImgData.length];
        setPhotoIndex({ ...photoIndex, index: prev, image: test.img })
    }
    const onMoveNext = () => {
        const next = (photoIndex.index + 1) % FeshionImgData.length
        const test = FeshionImgData[(photoIndex.index + 1) % FeshionImgData.length]
        setPhotoIndex({ ...photoIndex, index: next, image: test.img })
    }
    return (
        <Fragment>
            {FeshionImgData.length > 0 ?
                FeshionImgData.map((item, i) => (
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
                    <Lightbox
                        mainSrc={`/assets/images${photoIndex?.image}`}
                        nextSrc={`/assets/images${FeshionImgData[(photoIndex.index + 1) % FeshionImgData.length].img}`}
                        prevSrc={`/assets/images${FeshionImgData[(photoIndex.index + FeshionImgData.length - 1) % FeshionImgData.length].img}`}
                        imageTitle={photoIndex.index + 1 + "/" + FeshionImgData.length}
                        onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                        onMovePrevRequest={onMovePrev}
                        onMoveNextRequest={onMoveNext}
                    />
                )
            }
        </Fragment>
    )
}

export default FashionImgFunc;