const records = [
    {
        id: 1, name: "John", email: "johan@gmail.com", gender: "male", hobby: ["cricket", "reading"], city: "surat", salary: 5000, designation: "junior"
    },
    {
        id: 2, name: "Rahul", email: "rahul@gmail.com", gender: "male", hobby: ["football", "reading"], city: "mumbai", salary: 6000, designation: "senior"
    },
    {
        id: 3, name: "Rohan", email: "rohan@gmail.com", gender: "male", hobby: ["cricket", "reading"], city: "pune", salary: 7000, designation: "senior"
    },
    {
        id: 4, name: "Ajay", email: "ajay@gmail.com", gender: "male", hobby: ["travelling", "reels"], city: "delhi", salary: 8000, designation: "junior"
    },
    {
        id: 5, name: "Rasik", email: "rasik@gmail.com", gender: "male", hobby: ["volleyball", "music"], city: "ahmedabad", salary: 9000, designation: "senior"
    },
    {
        id: 6, name: "Vishal", email: "vishal@gmail.com", gender: "male", hobby: ["cricket", "photography"], city: "bangalore", salary: 6000, designation: "junior"
    },
    {
        id: 7, name: "Sandeep", email: "sandeep@gmail.com", gender: "male", hobby: ["music", "travelling"], city: "kolkata", salary: 5000, designation: "junior"
    },
    {
        id: 8, name: "Sahil", email: "sahil@gmail.com", gender: "male", hobby: ["reading", "cooking"], city: "chennai", salary: 15500, designation: "senior"
    },
    {
        id: 9, name: "Amit", email: "amit@gmail.com", gender: "male", hobby: ["football", "gaming"], city: "delhi", salary: 6500, designation: "junior"
    },
    {
        id: 10, name: "Manish", email: "manish@gmail.com", gender: "male", hobby: ["cricket", "reading"], city: "lucknow", salary: 77000, designation: "senior"
    },
    {
        id: 11, name: "Kunal", email: "kunal@gmail.com", gender: "male", hobby: ["music", "gaming"], city: "hyderabad", salary: 25000, designation: "senior"
    },
    {
        id: 12, name: "Praveen", email: "praveen@gmail.com", gender: "male", hobby: ["sports", "reading"], city: "jaipur", salary: 20000, designation: "junior"
    },
    {
        id: 13, name: "Nikhil", email: "nikhil@gmail.com", gender: "male", hobby: ["volleyball", "movies"], city: "indore", salary: 21000, designation: "junior"
    },
    {
        id: 14, name: "Ravi", email: "ravi@gmail.com", gender: "male", hobby: ["travelling", "music"], city: "pune", salary: 35000, designation: "senior"
    },
    {
        id: 15, name: "Arvind", email: "arvind@gmail.com", gender: "male", hobby: ["cricket", "painting"], city: "surat", salary: 12000, designation: "junior"
    },
    {
        id: 16, name: "Kartik", email: "kartik@gmail.com", gender: "male", hobby: ["music", "cricket"], city: "mumbai", salary: 15000, designation: "senior"
    },
    {
        id: 17, name: "Deepak", email: "deepak@gmail.com", gender: "male", hobby: ["football", "photography"], city: "ahmedabad", salary: 10000, designation: "senior"
    },
    {
        id: 18, name: "Vikram", email: "vikram@gmail.com", gender: "male", hobby: ["reading", "movies"], city: "chennai", salary: 55000, designation: "junior"
    },
    {
        id: 19, name: "Suresh", email: "suresh@gmail.com", gender: "male", hobby: ["cricket", "travelling"], city: "mumbai", salary: 45000, designation: "junior"
    },
    {
        id: 20, name: "Tejas", email: "tejas@gmail.com", gender: "male", hobby: ["reading", "cooking"], city: "delhi", salary: 70000, designation: "junior"
    },
];


const viewRecord = () => {
    let tbl = "";
    records.map((val) => {
        tbl += `
                    <tr>
                        <td>${val?.id}</td>
                        <td>${val?.name}</td>
                        <td>${val?.email}</td>
                        <td>${val?.gender}</td>
                        <td>${val?.hobby}</td>
                        <td>${val?.city}</td>
                        <td>${val?.salary}</td>
                        <td>${val?.designation}</td>
                    </tr>
                `
    })
    document.getElementById('record').innerHTML = tbl;

}
viewRecord();

const cityFun = () => {
    let city = document.querySelector('#city').value;
    let cityRecords = records.filter((val) => val.city === city);
    let err = "";
    if (cityRecords.length == 0) {
        err += `<h1>Record not found</h1>`
        document.getElementById('error').innerHTML = err;
    }
    document.getElementById('city').value = "";
    let tbl = "";
    cityRecords.map((val) => {
        tbl += `
                    <tr>
                        <td>${val?.id}</td>
                        <td>${val?.name}</td>
                        <td>${val?.email}</td>
                        <td>${val?.gender}</td>
                        <td>${val?.hobby}</td>
                        <td>${val?.city}</td>
                        <td>${val?.salary}</td>
                        <td>${val?.designation}</td>
                    </tr>
                `
    })
    document.getElementById('record').innerHTML = tbl;


}

const reset = () => {
    viewRecord();
}
const print = () => {
     viewRecord();
    window.print();
 }