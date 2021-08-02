import React from "react";
import { render } from "@testing-library/react"
import Forms from "./forms"

it("test", () => {
    const { getByTestId } = render(<Forms />)
    expect(getByTestId('no-aria-invalid')).not.toBeInvalid()
    expect(getByTestId('aria-invalid')).toBeInvalid()
    expect(getByTestId('aria-invalid-value')).toBeInvalid()
    expect(getByTestId('aria-invalid-false')).not.toBeInvalid()

    expect(getByTestId('valid-form')).not.toBeInvalid()
    expect(getByTestId('invalid-form')).toBeInvalid()
})
