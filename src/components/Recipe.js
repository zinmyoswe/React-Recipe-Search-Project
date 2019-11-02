import React, { Component } from 'react'

export default class Recipe extends Component {
    render() {
        const {
            image_url,
            title,
            source_url,
            publisher,
            recipe_id
        } = this.props.recipe;

        return (
            <React.Fragment>
                <h1>Recipe</h1>
                <div className="col-10 mx-auto col-md-6 col-lg-4">
                    <div className="card">
                        <img src={image_url} className="img-card-top" style={{height:"14rem"}} alt="recipe" />
                        <div className="card-body text-capitalize">
                            <h5>{title}</h5>
                            <h6 className="text-warning text-slanted">
                                provided by {publisher}
                            </h6>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="btn btn-outline-primary">Details</button>
                            <a href="{source_url}" className="btn btn-outline-dark mx-2">Recipe url</a>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
