import { render, screen } from "@testing-library/react"
import userEvent  from "@testing-library/user-event"
import CartCard from "../components/Cart/CartCard"
import ProductCard from "../components/ProductsList/ProductCard"


//MOCK (pode ser feito em arquivo separado)
const productCartMock = {
    id: 1,
    image: "https://picsum.photos/200",
    title: "Produto teste",
    price: 1000
}

const removeFromCartMock = jest.fn()

describe("Cart Card", () => {
    
    test("deve renderizar a imagem, o título, o preço, a quantidade e o botão remover",  async () => {
        // const user = userEvent.setup()
        // render(<ProductCard product={productMock} addToCart={addToCartMock}/>)

        // const addBtn = screen.getByRole('button', {
        //     name: /buy/i
        // })

        // await user.click(addBtn)
        // expect(addToCartMock).toHaveBeenCalled()

        render(<CartCard product={productCartMock} removeFromCart={removeFromCartMock}/>)
        screen.logTestingPlaygroundURL()

    })


})