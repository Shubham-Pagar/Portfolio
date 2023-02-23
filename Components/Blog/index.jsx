import React from "react";
import './style.scss';
import Section from '../../Components/Shared/Section';
import Blog1 from '../../Images/Blogs/blog-thumb-1.jpg';
import Blog2 from '../../Images/Blogs/blog-thumb-2.jpg';
import Blog3 from '../../Images/Blogs/blog-thumb-3.jpg';
import BlogCart from "./Blog-cart";
const Blogs = () => {
    return (
        <Section id='Blogs'
            title='Blogs & Articles'
            background={'dark'}>
            <div className="blogs-content-wrapper">
                <BlogCart
                    user="Shubham Pagar"
                    date="Feb 8 2023"
                    image={Blog1}
                    title="Quis Autem Vea Eum Iure Reprehendrit"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <BlogCart
                    user="Shubham Pagar"
                    date="Feb 8 2023"
                    image={Blog2}
                    title="Quis Autem Vea Eum Iure Reprehendrit"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <BlogCart
                    user="Shubham Pagar"
                    date="Feb 8 2023"
                    image={Blog3}
                    title="Quis Autem Vea Eum Iure Reprehendrit"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
            </div>
        </Section >
    );
}

export default Blogs;