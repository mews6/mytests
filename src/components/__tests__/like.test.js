import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../like";

test("Defaults to Zero Likes", ()=>{
    render(<Like />);
    expect(screen.getByTestId("likeNumber") === 0);
});
test("Increments when Like clicked", ()=>{
    render(<Like />);
    fireEvent.click(screen.getByTestId("increment"));

    const check = screen.getByTestId("likeNumber");
    expect(check === 1);
});
test("Decrements when Dislike clicked", ()=>{
    render(<Like />);
    fireEvent.click(screen.getByTestId("decrement"));

    const check = screen.getByTestId("likeNumber");
    expect(check === -1);
});