"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
async function get_standings() {
    try {
        const res = await fetch("https://ercstandings.onrender.com/standings");
        const data = await res.json();

        const table = document.getElementById("standings-body");
        table.innerHTML = "";

        data.forEach(row => {
            table.innerHTML += `
                <tr>
                    <td>${row.Position}</td>
                    <td>${row.Name}</td>
                    <td>${row.Team}</td>
                    <td>${row.Points}</td>
                </tr>
            `;
        });
    } catch (error) {
        console.error("Error: impossible to load standings", error);
    }
}
get_standings();
