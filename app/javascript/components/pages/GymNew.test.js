import React from "react"
import { render, screen } from "@testing-library/react"
import GymNew from "./GymNew"
import { BrowserRouter, Route, Routes } from "react-router-dom"

describe("<GymNew />", () => {
    const createGym = () =>{}
    const current_user = {id: 1}
    it("renders without crashing", () => {
        render( <GymNew createGym={createGym} currentUser={current_user} />
        )

        const element = screen.getByText(/Add a gym/i)
    
        expect(element).toBeInTheDocument()
    })

    it("renders the input field of gym name", () => {
        render( <GymNew createGym={createGym} currentUser={current_user} />
        )

        const element = screen.getByText(/gym name/i)
    
        expect(element).toBeInTheDocument()
    })
})