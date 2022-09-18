import React from 'react';
import Link from 'next/link'
import {Form,Input} from 'reactstrap'
const NewsLetter = ({}) => {

    return (
        <div className="sidebar-container">
            <h5 className="blog-title">newsletter</h5>
            <Form className="newsletter text-center">
                <div className="form-group mb-0">
                    <Input className="form-control" placeholder="enter email" type="text" />
                    <Link href="#"><a href="#javascript"><i aria-hidden="true" className="fa fa-paper-plane"></i></a></Link>
                </div>
            </Form>
        </div>
    );
};

export default NewsLetter;
