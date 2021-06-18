import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./Styles";

export function TransactionsTable(){
    useEffect(()=>{
        api.get('transactions')
        .then(response => console.log(response.data))
    }, []);
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th className="title">Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>

                    <tr>
                        <td>Venda website</td>
                        <td className="deposit"> R$12.000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Caixinha</td>
                        <td className="withdraw">- R$1.000,00</td>
                        <td>Moradia</td>
                        <td>28/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}