import { render, screen } from "@testing-library/react"
import userEvent  from "@testing-library/user-event"
import ProductCard from "../components/ProductsList/ProductCard"


//MOCK (pode ser feito em arquivo separado)
const productMock = {
    id: 1,
    image: "https://picsum.photos/200",
    title: "Produto teste",
    price: 1000
}

const addToCartMock = jest.fn()

describe("Product Card", () => {
    test ("testar renderizar card de produto", () => {
        render(<ProductCard product={productMock} addToCart={addToCartMock}/>)
        //Opcional
        // const title = screen.getByText("Produto teste")
        // expect(title).toBeInTheDocument()
    })

    test("testar a renderização do título, imagem, preço e botão de compra", () => {
        render(<ProductCard product={productMock} addToCart={addToCartMock}/>)
        // screen.logTestingPlaygroundURL()
        const title = screen.getByRole('heading', {
            name: /produto teste/i
        })
        const image = screen.getByRole('img', {
            name: /produto teste/i
        })
        const price = screen.getByText(/\$1000\.00/i)
        const addBtn = screen.getByRole('button', {
            name: /buy/i
        })

        expect(title).toBeInTheDocument()
        expect(image).toBeInTheDocument()
        expect(price).toBeInTheDocument()
        expect(addBtn).toBeInTheDocument()
    })

    test("testar quando o botão de comprar for clicado, deve adicionar o produto ao carrinho", async () => {
        const user = userEvent.setup()
        render(<ProductCard product={productMock} addToCart={addToCartMock}/>)

        const addBtn = screen.getByRole('button', {
            name: /buy/i
        })

        await user.click(addBtn)
        //como estou utilizando jest.fn(), posso usar métodos especiais para verificar se a função está funcionando
        //verifica se a função foi chamada
        expect(addToCartMock).toBeCalled()
        //verifica quantas vezes foi chamada
        expect(addToCartMock).toBeCalledTimes(1)
        //verifica qual é o argumento passado na função
        expect(addToCartMock).toBeCalledWith(productMock)
    })
 
})