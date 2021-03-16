import { Container } from "./styles";

export function Transaction() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Website development</td>
                        <td className="deposit">£12,000.00</td>
                        <td>Development</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Let</td>
                        <td className="withdraw">- £1,725.00</td>
                        <td>House</td>
                        <td>01/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}