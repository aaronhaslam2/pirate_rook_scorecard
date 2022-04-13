<template>
    <table>
        <tr>
            <th></th>
            <th class="bid">6</th>
            <th class="bid">7</th>
            <th class="bid">8</th>
            <th class="bid">9</th>
            <th class="bid">10</th>
        </tr>
        <tr>
            <td class="green color">Green</td>
            <td>100</td>
            <td>200</td>
            <td>300</td>
            <td>400</td>
            <td>500</td>
        </tr>
        <tr>
            <td class="yellow color">Yellow</td>
            <td>120</td>
            <td>220</td>
            <td>320</td>
            <td>420</td>
            <td>520</td>
        </tr>
        <tr>
            <td class="red color">Red</td>
            <td>140</td>
            <td>240</td>
            <td>340</td>
            <td>440</td>
            <td>540</td>
        </tr>
        <tr>
            <td class="black color">Black</td>
            <td>160</td>
            <td>260</td>
            <td>360</td>
            <td>460</td>
            <td>560</td>
        </tr>
        <tr>
            <td class="no_trump color">No Trump</td>
            <td>200</td>
            <td>325</td>
            <td>450</td>
            <td>575</td>
            <td>700</td>
        </tr>
    </table>
</template>

<script>
export default {
    
}
</script>

<style>
table, th, td{
    padding: 5px;
    margin-left: auto;
    margin-right: auto;
    font-size: 80%;
}
table {
    border-radius: 10px;
    background: #eee;
}
th.bid{
    background: #eee;
    border-radius: 10px;
}
.color{
    border-radius: 10px;
}
.green{
    background: green;
    color: white;
}
.red{
    background: red;
    color: white;
}
.yellow{
    background: yellow;
    color: black;
}
.black{
    background: black;
    color: white;
}
.no_trump{
    background: blue;
    color: white;
}
</style>