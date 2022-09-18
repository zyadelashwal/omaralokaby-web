import React, { Fragment, useState } from 'react';
import { BagsImgData } from '../database';
import Lightbox from "react-image-lightbox";

const BagsImgFunc = ({ className, title, subTitle }) => {
    const initilindex = { index: 0, isOpen: false }
    const [photoIndex, setPhotoIndex] = useState(initilindex)

    const onClickImg = (img, i) => {
        setPhotoIndex({ ...photoIndex, index: i, image: img, isOpen: true })
    }

    const onMovePrev = () => {
        const prev = (photoIndex.index + BagsImgData.length - 1) % BagsImgData.length
        const test = BagsImgData[(photoIndex.index + BagsImgData.length - 1) % BagsImgData.length];
        setPhotoIndex({ ...photoIndex, index: prev, image: test.img })
    }
    const onMoveNext = () => {
        const next = (photoIndex.index + 1) % BagsImgData.length
        const test = BagsImgData[(photoIndex.index + 1) % BagsImgData.length]
        setPhotoIndex({ ...photoIndex, index: next, image: test.img })
    }
    return (
        <Fragment>
            {BagsImgData.length > 0 ?
                BagsImgData.map((item, i) => (
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
                        nextSrc={`/assets/images${BagsImgData[(photoIndex.index + 1) % BagsImgData.length].img}`}
                        prevSrc={`/assets/images${BagsImgData[(photoIndex.index + BagsImgData.length - 1) % BagsImgData.length].img}`}
                        imageTitle={photoIndex.index + 1 + "/" + BagsImgData.length}
                        onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                        onMovePrevRequest={onMovePrev}
                        onMoveNextRequest={onMoveNext}
                    />
                )
            }
        </Fragment>
    )
}

export default BagsImgFunc;