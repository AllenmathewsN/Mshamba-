import React from "react";
import "./styles.css";

function Table(){
    return(
        <div class="table1">
        <h4>Table containing Ids of specific items.</h4>
        <table>
            <tr>
                <th>Item_id</th>
                <th>Item_Name</th>
            </tr>

            <tr>
                <td>1</td>
                <td>Rice</td>
            </tr>

            <tr>
                <td>2</td>
                <td>Beans</td>
            </tr>

            <tr>
                <td>3</td>
                <td>Peas</td>
            </tr>

            <tr>
                <td>4</td>
                <td>Carrots</td>
            </tr>

            <tr>
                <td>5</td>
                <td>Maize</td>
            </tr>

            <tr>
                <td>6</td>
                <td>Pineapple</td>
            </tr>
        </table>
        <div class="about3">
            <h4>About Us</h4>
            <p>This is a grocery e-commerce platform for farmers to sell their products and can compare prices for different commodities. The platform will have warehouses in different regions for farmers to bring their goods where they will be inspected for Quality Assurance. Selling in bulk will give them bargaining power as they will cut off all middle men in the process. We hope to see this platform become a household name in the East African market hopefully in future.  </p>

        </div>
    </div>
    )
}

export default Table;