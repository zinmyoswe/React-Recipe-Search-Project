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

                    </div>
                </div>
            </React.Fragment>
        );
    }
}
