var age = [10, 20, 30, 40, 50];
var tbl = `
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>age</th>
                        

                    </tr>   
                 </thead>
                <tbody>
                    <tr class="fcolor" style="color:white">
                        <td>1</td>
                        <td>shailesh</td>
                        <td>shailesh@gmail.com</td>
                        <td>${age[0]}</td>
                       
                    </tr>

                     <tr>
                        <td>2</td>
                        <td>mahesh</td>
                        <td>mahesh@gmail.com</td>
                         <td>${age[1]}</td>
                    </tr>

                     <tr class="fcolor" style="color:white">
                        <td>3</td>
                        <td>manish</td>
                        <td>manish@gmail.com</td>
                         <td>${age[2]}</td>
                    </tr>

                     <tr>
                        <td>4</td>
                        <td>ajay</td>
                        <td>ajay@gmail.com</td>
                         <td>${age[3]}</td>
                    </tr>

                    <tr class="fcolor" style="color:white">
                        <td>5</td>
                        <td>jay</td>
                        <td>jay@gmail.com</td>
                         <td>${age[4]}</td>
                    </tr>
                </tbody>`

console.log(tbl);

document.getElementById("record").innerHTML = tbl;  