import React from "react";
// import { render, screen, act } from "@testing-library/react"
import axios from 'axios'
import Home from "./home"
import "@testing-library/jest-dom"
import renderer from "react-test-renderer"
const  {act} = renderer

it("loads the data on mount", async () => {
    const FAKE_HITS = [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        }
    ];
    const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: FAKE_HITS });// spy on axios and pass data we want in return 

    let component;
    await act(async () => {
        component = renderer.create(<Home/>); // create component snapshot we want to call axios in 
    });
    expect(axiosGetSpy).toBeCalledWith('https://jsonplaceholder.typicode.com/posts');// specify data or url in this case we want to pass
    expect(component.toJSON()).toMatchSnapshot();
    axiosGetSpy.mockRestore(); //  resets everything, which includes usage data, implementation and mock name.
})

// mock axios call , we make an mock array that we want when the call gets completed