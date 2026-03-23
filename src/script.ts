interface Standing {
    Position: number;
    Name: string;
    Team: string;
    Points: number;
}

async function get_standings() {
    const res = await fetch("http://127.0.0.1:5000/standings");
    const data: Standing[] = await res.json();

    const table = document.getElementById("standings-body")!;
    table.innerHTML = "";

    data.forEach((row: Standing) => {
        table.innerHTML += `
            <tr>
                <td>${row.Position}</td>
                <td>${row.Name}</td>
                <td>${row.Team}</td>
                <td>${row.Points}</td>
            </tr>
        `;
    });
}

get_standings();