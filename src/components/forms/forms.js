import React from "react";

function Forms(props) {
    return (
        <>
            <input data-testid="no-aria-invalid" />
            <input data-testid="aria-invalid" aria-invalid />
            <input data-testid="aria-invalid-value" aria-invalid="true" />
            <input data-testid="aria-invalid-false" aria-invalid="false" />

            <form data-testid="valid-form">
                <input />
            </form>

            <form data-testid="invalid-form">
                <input required />
            </form>
        </>
    )
}

export default Forms