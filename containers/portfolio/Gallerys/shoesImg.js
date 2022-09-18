import React, { Fragment, useState } from 'react';
import { ShoesImgData } from '../database';
import Lightbox from "react-image-lightbox";

const ShoesImgFun = ({ className, title, subTitle }) => {

    const initilindex = { index: 0, isOpen: false }
    const [photoIndex, setPhotoIndex] = useState(initilindex)

    const onClickImg = (img, i) => {
        setPhotoIndex({ ...photoIndex, index: i, image: img, isOpen: true })
    }

    const onMoveNext = () => {
        const next = (photoIndex.index + 1) % ShoesImgData.length
        const test = ShoesImgData[(photoIndex.index + 1) % ShoesImgData.length]
        setPhotoIndex({ ...photoIndex, index: next, image: test.img })
    }
    const onMovePrev = () => {
        const prev = (photoIndex.index + ShoesImgData.length - 1) % ShoesImgData.length
        const test = ShoesImgData[(photoIndex.index + ShoesImgData.length - 1) % ShoesImgData.length];
        setPhotoIndex({ ...photoIndex, index: prev, image: test.img })
    }

    return (
        <Fragment>
            {ShoesImgData.length > 0 ?
                ShoesImgData.map((item, i) => (
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
                        nextSrc={`/assets/images${ShoesImgData[(photoIndex.index + 1) % ShoesImgData.length].img}`}
                        prevSrc={`/assets/images${ShoesImgData[(photoIndex.index + ShoesImgData.length - 1) % ShoesImgData.length].img}`}
                        imageTitle={photoIndex.index + 1 + "/" + ShoesImgData.length}
                        onCloseRequest={() => setPhotoIndex({ ...photoIndex, isOpen: false })}
                        onMovePrevRequest={onMovePrev}
                        onMoveNextRequest={onMoveNext}
                    />
                )
            }
        </Fragment>
    )
}

export default ShoesImgFun;