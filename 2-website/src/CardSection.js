import React from 'react'
import Card from './Card'

export default function CardSection() {
    return (
        <section className="contact bg-success ">
            <div className="container ">
                <h2 className="text-white">We love new friends!</h2>
                    <div className="row">
                        <div className="col-4">
                            <Card 
                                img="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Title 1"
                                description="Some quick example text to build on the card title and make up
                                the bulk of the card's content."
                                button="Click Me !!!"
                            />
                        </div>
                        <div className="col-4">
                            <Card 
                                img="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Title 2"
                                description="Some quick example text to build on the card title and make up
                                the bulk of the card's content."
                                button="Click Me !!!"
                            />
                        </div>
                        <div className="col-4">
                            <Card 
                                img="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                                title="Title 3"
                                description="Some quick example text to build on the card title and make up
                                the bulk of the card's content."
                                button="Click Me !!!"
                            />
                        </div>
                    </div>
            </div>
        </section>
    )
}
